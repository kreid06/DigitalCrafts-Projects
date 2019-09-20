function getRndColor(){
    var colorPossible = 'abcdefABCDEF1234567890'
    var colorString = '#'
    for(var i = 0; i < 6; i++){
        colorString += colorPossible[Math.floor(Math.random()*22)]
    }
    return colorString;
}

function getGuestName(){
    return `Guest${Math.random*Math.pow(10,16)}`
}

var seedState = 
    {
        playing: false,
        color: getRndColor(),
        name: getGuestName()
    }


export default (state = seedState, action)=>{
    if(action.type === 'updateUser'){
        let newState = Object.assign({},state);
        newState.color = action.payload.color
        newState.playing = action.payload.playing
        newState.name = newState.name === "" ? state.name : newState.name
        console.log(newState)
        return newState
    }
    return state
}