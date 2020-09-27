import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Categories from './Categories';

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
            <div className="bg-secondary">
                <NavBar />
                <div>
                    <span className="welcomeMessage">Welcome {this.state.userID}</span>
                    {/* <span> */}
                        <SearchBar />
                    {/* </span> */}
                    <Categories />
                </div>
                
            </div>
        )
    }
}

export default HomePage