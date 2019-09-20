import React from 'react';
import { Link } from "react-router-dom";

class Register extends React.Component{
    render(){
        return (
            <div id="Register" class="register-cont hidden">
                    <Link to="/menu">
                        <button>Go Back</button>
                    </Link>
                    <h1 class="register-title">Register</h1>
                    <div id="register-msg">Hello, Please register below :)</div>
                    <div class="username-cont">
                        <label for="username-field">username: </label>
                        <input id="username-field" class="text-field" placeholder="enter a username"/>
                    </div>
                    <div class="password-cont">
                        <label for="password-field">password: </label>
                        <input id="password-field" class="text-field" placeholder="enter a password"/>
                    </div>
                    <div class="password-check-cont">
                        <label for="password-check-field">password check: </label>
                        <input id="password-check-field" class="text-field" placeholder="reenter password"/>
                        <button class="register-submit">register</button>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        playing: state.playing,
        name: state.name,
        color: state.color
    }
}

export default Register