import React from 'react';
import { Link } from 'react-router-dom';
import './ModalSplash.css'

function ModalSplash(props){
    return(
        <div className="modalCont">
            <button className="facebook-login">Connect With Facebook</button>
            <button className="google-login">Connect with Google</button>
            <span>or</span>
            <button onClick={()=>{props.changeModalContent('signup')}} className="center email-login">Sign up with email</button>
            <div className="border-rule"></div>
            <div onClick={()=>{props.changeModalContent('login')}} className="login-text align-left"> Existing User? Click here! <Link to="">Log in</Link></div>        
        </div>
    )
}

export default ModalSplash;