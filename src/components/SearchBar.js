import React from 'react'
import '../App.css';
import axios from 'axios';
import SelectSearch from 'react-select-search';
export default class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            filterdata: '',
            displaydata: [],
        }
    }
    onChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value})
        let request = {filterData : value}
        console.log('request'+ request)
        axios.get("http://localhost:5000/filterProducts",{params:request})
        .then((res)=>{
            // this.setState({displaydata:res.data}),
            res.data.forEach((element,key) => {
                let joined = this.state.displaydata.concat('new value');
                this.setState({displaydata:joined})
            });        
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render() {
       let para = <SelectSearch 
       options={[]}
       getOptions={this.state.displaydata}
       search
       placeholder="Your favorite drink"
       
       /> ;
    // let para =[]
    // this.state.displaydata.forEach((element,key) => {
    //     para.push(<p key={key}> {`${element.fullName} in ${element.presentIn}`}</p>)

    // });
        return (
            <div className="wrap">
                <div className="searchBar">
                    <input className="searchBarInput" placeholder="Search.." type='text' name='filterdata' value = {this.state.filterdata} onChange={this.onChange}></input>
                    <button className="searchButton">
                        {/*  */}
                    </button>
                    {para}
                </div>
            </div>
        )
    }
}
