export default (name, color, playing)=>{
    return {
        type: `updateUser`,
        payload: {
            name,
            color,
            playing
        }
    }
}