import openSocket from 'socket.io-client';
// const socket = openSocket('10.150.41.181:7000')
const socket = openSocket('192.168.1.71:7000')

function subscribeToTimer(cb){
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000)
}
function getPlayers(cb){
    socket.on('playerList', playerList => cb(null, playerList))
}
function getMap(cb){
    socket.on("mapData", mapData => cb(null, mapData))
}
function sendPlayer(player){
    socket.emit('playerData', player)
}
export { subscribeToTimer, getPlayers, getMap, sendPlayer}