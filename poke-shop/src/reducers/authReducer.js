export default (state = {},action)=>{
    if(action.type === 'signUp'){
        // I care about this aciton!!!
        console.log(action.payload.data)
        return action.payload.data
    }else if(action.type === 'logout'){
        return {}
    }
    return state;
}