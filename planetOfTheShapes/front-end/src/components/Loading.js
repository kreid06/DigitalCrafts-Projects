import React from "react";
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Loading extends React.Component{
    
    render(){
        if(this.props.playing===true){
            return (
                <Redirect to="/game"/>
            )
        }else{
            return(
                <div className="menu-cont">
                    <div id="menu-loading" className="menu-loading hidden">
                                <h1>Loading...</h1>
                    </div>
                </div>
            )
        }
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

export default connect(mapStateToProps)(Loading)