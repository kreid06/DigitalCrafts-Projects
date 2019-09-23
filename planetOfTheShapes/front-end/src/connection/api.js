import openSocket from 'socket.io-client';
// const socket = openSocket('10.150.41.181:7000')
const socket = openSocket('localhost:7000')

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
function createBullet(playerIP, timesFired, player){
    socket.emit('createBullet', [playerIP, timesFired, player])
}
function getBullets(cb){
    socket.on('bullets', bullets=> cb(null, bullets))
}
function setPlayerIP(cb){
    socket.on('playerIP', playerIP => cb(null, playerIP))
}
function checkHit(cb){
    socket.on('colisionCheck', playerHit => cb(null, playerHit))
}
function killPlayer(cb){
    socket.on('killPlayer', player => cb(null, player))
}
export { subscribeToTimer, getPlayers, getMap, sendPlayer, setPlayerIP, createBullet, getBullets, checkHit, killPlayer }