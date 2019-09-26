import React from 'react';

class Game extends React.Component{
    constructor(){
        super();
        this.state = {
            menu: false,
            player: false,
            isplaying: false
        }
    }
    componentDidMount(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        var draw = ()=>{    
            requestAnimationFrame(draw)
            now = Date.now();
            elapsed = now - then;

            if (elapsed > fpsInterval) {
                this.props.playing === true ? window.scrollTo(player.x- window.innerWidth/2+100,player.y- window.innerHeight/2+100) : window.scrollTo(2500,2500)
                // console.log(this.state.player,this.state.keydown)
               
                then = now - (elapsed % fpsInterval);

            }
        }
        function startDrawing(fps) {
            fpsInterval = 1000 / fps;
            then = Date.now();
            startTime = then;
            draw()
        }
        startDrawing(30)
        

        

    }


    render(){
        return(
            <div>
                <Menu/>
                <canvas ref="canvas"></canvas>
            </div>
        )
    }
}