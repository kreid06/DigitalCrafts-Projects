import React from 'react';
import { Link } from "react-router-dom";
import ModalSplash from './ModalSplash';
import Login from './Login';
import Register from './Register';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logoutAction from '../../actions/logoutAction';
import './Navbar.css'

class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
            showModal: false,
            modalContent: ""
        }
    }

    componentDidMount(){
        this.setState({
            modalContent: <ModalSplash changeModalContent={this.changeModalContent}/> 
        })
    }

    changeModalContent = (newContent)=>{
        let modalContent = <ModalSplash changeModalContent={this.changeModalContent}/>
        if(newContent === 'login'){
            modalContent = <Login  changeModalContent={this.changeModalContent}/>
        }else if(newContent === 'register'){
            modalContent = <Register  changeModalContent={this.changeModalContent} closeModal={this.closeModal} />
        }
        this.setState({
            modalContent
        })
    }

    register = (e)=>{
        document.querySelector('body').className = 'body-modal-show';
        this.setState({
            showModal: true,
        })
    }


    closeModal = (e)=>{
        document.querySelector('body').className = '';
        this.setState({
            showModal: false
        })
    }

    buildNavLinks = ()=>{
        if(!this.props.auth.token){
            // user is not logged in. Give them standard nav
            return(
                <ul id="nav-mobile" className="right">
                    <li><Link to="/">Home</Link></li>
                    <li className="nav-non-link" onClick={this.register}>
                        Register
                    </li>
                    <li className="nav-non-link" onClick={this.register}>
                        Log in
                    </li>
                </ul>
            )
        }else{
            //user is logged, give them logged in nav
            return(
                <ul id="nav-mobile" className="right">
                    <li><Link to="/">Home</Link></li>
                    <li onClick={this.props.logout}>Logout</li>
                    <li><Link to="/account">Welcome, {this.props.auth.first}</Link></li>
                </ul>
            )
        }
    }
    

    render(){
        const navLinks = this.buildNavLinks();
        return(
            <div>
                {navLinks}
                <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}} >
                    <button id="close-modal" onClick={this.closeModal}>&Chi;</button>
                    <div className="modal-content">
                        {this.state.modalContent}
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        logout: logoutAction
    },dispatch)
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)