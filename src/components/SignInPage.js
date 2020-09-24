import React from 'react';
import { Redirect} from 'react-router-dom'
// import axios from 'axios';

class SignInPage extends React.Component{
    constructor(){
        super();
        this.state={
            emailid: "",
            password: "",
            loginAccepted: false,
            userId: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Successfully submitted");
        //axios call for sign in validation
        //if successful navigate to home page and send id in props
        const userIdFromAPI = "1234";
        this.setState({loginAccepted:true, userId:userIdFromAPI})
        //else wrong password error
    }

    render() {
        let afterLogin;
        
        if(this.state.loginAccepted){
            console.log(this.state.userId)
            afterLogin = (
                // <HomePage userId={this.state.userId} />
                // <BrowserRouter>
                    <Redirect to={{pathname:`/${this.state.userId}` , state:{userid:this.state.userId}}}/>
                // </BrowserRouter>
            )
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