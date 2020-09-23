import React from 'react';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userID : this.props.location.state.userid,
        }
    }
    componentDidMount(props){
        if(this.state.userID !== this.props.location.state.userid){
            this.setState({userID:this.props.location.state.userid}) 
        }
    }
    render(){
        return(
            <div>
                <p>Welcome {this.state.userID}</p>
            </div>
        )
    }
}

export default HomePage