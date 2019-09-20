import React from "react";
import { Link } from "react-router-dom";

class MenuMain extends React.Component{
    render(){
        return(
        <div id="start-menu" class="start-menu" >
                    <h1 class="start-title">Planet Of The Shapes online!</h1>
                    <Link to="/login">
                        <button id="login-button">Login</button>
                    </Link>
                    <Link to="/register">
                        <button id="register-button">Register</button>
                    </Link>

                    <Link to="/play">
                        <button id="play-button">Register</button>
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
export default MenuMain;