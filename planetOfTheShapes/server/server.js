const io = require('socket.io')();

const players = {};
const mapSize = {width: 5000, height: 5000}

var address ;

io.on('connection', (client)=>{
    client.on('playerData', (player)=>{
        let playerIp = client.handshake.address
        address = client.handshake
        players[playerIp] = player
    })
    client.emit('mapData', mapSize)
    client.on('subscribeToTimer', (interval) => {
        // console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
          }, interval);
    });
    setInterval(()=>{
    // console.log(players)
    client.emit('playerList', Object.values(players))
    },.1)
})

setTimeout((stuff)=>{
    console.log(address)

},10000)

const port = 7000;

io.listen(port)
console.log('listening on port: ', port)