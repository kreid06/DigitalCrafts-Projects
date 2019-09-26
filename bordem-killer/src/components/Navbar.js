import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <div className="Navbar">
            <img className="logo" src="./images/Logo.png"></img>
            <ul className="menu align-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/about-us">About</Link></li>
            </ul>
        </div>        
        )
    }
}

export default Navbar;