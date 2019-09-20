import React from 'react';
import { Link } from "react-router-dom";

class Login extends React.Component{
    render(){
        return(
                <div id="login" class="login-cont hidden">
                    <Link to="/menu">
                        <button>Go Back</button>
                    </Link>
                    <h1 class="login-title">Login</h1>
                    <div id="login-msg">Please enter login info. </div>
                    <div class="username-cont">
                        <label for="username-field">username: </label>
                        <input id="username-field" class="text-field" placeholder="username"/>
                    </div>
                    <div class="password-cont">
                        <label for="password-field">password: </label>
                        <input id="password-field" class="text-field" placeholder="password"/>
                    </div>
                    <Link to="/menu/loading">
                        <button id="login-submit">login</button>
                    </Link>
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

export default Login;