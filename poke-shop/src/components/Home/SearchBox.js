import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component{

    state = {
        checkIn: "",
        checkOut: "",
        where: "",
        guests: 0
    };

    // handleWhere = (e)=>{
    //     this.setState({where: e.target.value})
    // }

    // handleCheckIn = (e)=>{
    //     this.setState({checkIn: e.target.value})
    // }

    // handleCheckOut = (e)=>{
    //     this.setState({checkOut: e.target.value})
    // }

    // handleGuests = (e)=>{
    //     this.setState({guests: e.target.value})
    // }

    render(){
        return(
            <div className="home-search-box col m4">
            </div>            
        )
    }
}

export default SearchBox;
