import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getMap, sendPlayer, getPlayers } from '../connection/api';
import { playerSquare, UserSquare } from '../game/shapes'
import './Map.css'

class Map extends React.Component{
    constructor(){
        super();
        this.state = {
            players: [],
            mapSize: {width:5000, height:5000},
            player: null,
            keys: null
        }
        getMap((err, mapData)=> this.setState({
            mapSize : mapData
        }))
        getPlayers((err, playerList)=>{this.setState({
            players: playerList
        })
    })
    }
    createPlayer(name, color){
            return new UserSquare(Math.floor(Math.random() * this.state.mapSize.width), Math.floor(Math.random()*this.state.mapSize.height), 100, name, color)
    }


    

    componentDidMount() {
        var player;
        var playerStatus = false;
        var keydown;
        var checkPlayer = ()=>{
            console.log('it worked')
            playerStatus = true
            if(this.props.playing === true){
                    player = this.createPlayer(this.props.name, this.props.color)
                    keydown = {w:false, a:false, s:false, d:false};
                    
                    document.addEventListener("keydown",(e)=>{
                        // console.log(e)
                            switch(e.keyCode){
                                case 87:
                                    keydown.w = true
                                    keydown.s = false
                                    break;
                                case 83:
                                    keydown.w = false
                                    keydown.s = true
                                    break;
                                default:
                                    keydown.w = false
                                    keydown.s = false
                                }
                            })
                        }
        }
        
            
            
        console.log('hi')
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        var stop = false;
        var frameCount = 0;
        var fps, fpsInterval, startTime, now, then, elapsed;
        
        var playerAngle = 0;
        function mousefunc() {
            if(window.Event) {
                document.captureEvents(Event.MOUSEMOVE)
            }
            document.onmousemove = mouse
        }
        var mouse = (e)=> {
            // console.log('hello world')
            if(this.props.playing === true){
                var x = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
                playerAngle = (Math.atan2(((e.clientX-100)-player.x+ document.documentElement.scrollLeft), -((e.clientY-100+document.documentElement.scrollTop)-player.y))+ 3*Math.PI/2)
            }
            // console.log((e.clientX))
            // console.log(player.x)
            // console.log((player.angle *180/Math.PI)-360)
        }
        window.onload = mousefunc;

        // console.log(player)

        var draw = ()=>{    
            requestAnimationFrame(draw)
            let checkplayer = playerStatus === false && this.props.playing? checkPlayer() :null
            now = Date.now();
            elapsed = now - then;

            if (elapsed > fpsInterval) {
                this.props.playing === true ? window.scrollTo(player.x- window.innerWidth/2+100,player.y- window.innerHeight/2+100) : window.scrollTo(2500,2500)
                // console.log(this.state.player,this.state.keydown)
                this.setState({
                    player: player,
                    key: keydown
                })
                then = now - (elapsed % fpsInterval);

                if(this.props.playing===true){
                    player.setAngle(playerAngle)
                    var { angle, color } = player
                    let [x,y]  = player.checkKeys(keydown)
                    // console.log(angle)
                    // console.log(x)
    
    
                    sendPlayer({ x, y, angle, color })
    
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                    playerSquare({ x, y, angle, color }, ctx);
                }

                this.state.players.forEach((player)=>{
                    playerSquare(player, ctx)
                })
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
                <canvas ref="canvas" id="mpMap" width={this.state.mapSize.width} height={this.state.mapSize.height}> 
                </canvas>
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

export default connect(mapStateToProps)(Map)