import React from 'react';
import axios from 'axios';

class SignUpPage extends React.Component{
    constructor(){
        super();
        this.state={
            name: "",
            emailid: "",
            password: "",
            phonenumber: "",
            isSeller: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value})
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        const user={
            "name":this.state.name,
            "emailid": this.state.emailid,
            "password": this.state.password,
            "phonenumber": this.state.phonenumber
        }
        console.log(user)
        axios.post(
            "http://localhost:5000/signup",
             user
        ).then(
            res=>{
                console.log(res.data)
            }
        )
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Email Id:
                    <input type="text" name="emailid" value={this.state.emailid} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Phone Number:
                    <input type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.handleChange} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SignUpPage