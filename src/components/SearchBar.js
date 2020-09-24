import React from 'react'
import '../App.css';

export default class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    onChange=()=>{
        
    }
    render() {
        return (
            <div className="wrap">
                <div className="searchBar">
                    <input className="searchBarInput" placeholder="Search.." onChange={this.onChange}></input>
                    <button className="searchButton">
                        {/*  */}
                    </button>
                </div>
            </div>
        )
    }
}
