import React from 'react';

class Game extends React.Component{
    constructor(){
        super();
        this.state = {
            render: "",
            playing : false,
            
        }
    }

    componentDidMount(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        
        var background = new Image();
        background.src = ""
        
        if(playing){
            
        }
    }
    render(){
        return(
            <div>
                <canvas></canvas>
                {this.state}
            </div>
        )
    }
}

export default Game