import React from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class SignInPage extends React.Component {
    constructor() {
        super();
        this.state = {
            emailid: "",
            password: "",
            loginAccepted: false,
            userId: "",
            errorMessage:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const signInDetails = {
            "emailid": this.state.emailid,
            "password": this.state.password
        }
        if(this.state.emailid === "" || this.state.password===""){
            this.setState({errorMessage:"Fields cannot be null.", loginAccepted: false})
            return
        }
        
        axios.post(
            "http://localhost:5000/signin",
            signInDetails,
            
        ).then(
            res => {
                console.log(res.data)
                this.setState({userId:res.data, loginAccepted: true})
            }
        ).catch((error)=>{
            console.log(error.response)
            if(error.reponse == null){
                this.setState({errorMessage:error.response.data, loginAccepted: false})
            }
        }
        )
}

render() {
    let afterLogin;
    if (this.state.loginAccepted) {
        afterLogin = (<Redirect to={{ pathname: `/${this.state.userId}`, state: { userid: this.state.userId } }} />)
    }
    else{
    afterLogin = (<p>{this.state.errorMessage}</p>)
    }
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email Id:
                    <input type="text" name="emailid" value={this.state.emailid} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Sign In" />
            </form>
            {
                afterLogin
            }
        </div>
    )
}
}

export default SignInPage