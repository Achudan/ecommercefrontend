import React from 'react';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

class WelcomePage extends React.Component {
    constructor(){
        super();
        this.state={
            signup: false
        }
    }
    signUp = ()=>{
        let excistingStatus = !(this.state.signup);
        console.log(excistingStatus)
        this.setState({signup:excistingStatus})
    }
    render(){
        let component;
        const isSignup = this.state.signup;
        const buttonName = isSignup?"Sign In":"Sign Up";
        if (isSignup) {
            component = <SignUpPage />;
          } else {
            component = <SignInPage />;
          }
        return(
            <div>
                <h2>Welcome to ecommerce site!...</h2>
                {
                    component
                }
                <button onClick={this.signUp}>{buttonName}</button>
            </div>
        )
    }

    
}

export default WelcomePage;