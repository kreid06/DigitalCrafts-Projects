import React from "react";
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import updatePlayer from '../actions/updatePlayer'

class Play extends React.Component{
    
    state = {
        name: this.props.name,
        color: this.props.color
    }

    changeColor = (e)=>{
        this.setState({color:e.target.value})
    }

    changeName = (e)=>{
        this.setState({name:e.target.value})
    }

    updatePlayerFunc = (player)=>{
        this.props.updatePlayer(
            this.state.name,
            this.state.color,
            true
        )
        this.props.history.push('/game/loading')
    }

    render(){
            return (
                <div className="menu-cont">
                    <h1>Welcome to Pots online!</h1>
                    <label htmlFor="color-input">username: </label>
                    <input value={this.state.name} onChange={this.changeName} type="text" placeholder={this.props.name}/>
                    <input value={this.state.color} onChange={this.changeColor} id="color-input" type="color"/>
                    <button id="start-button" onClick={this.updatePlayerFunc}>play</button>
                </div>
            )
        }
    
}

function mapStateToProps(state){
    console.log(state)
    return {
        playing: state.players.playing,
        name: state.players.name,
        color: state.players.color
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updatePlayer
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);