const io = require('socket.io')();

const players = {};
const bullets = {};
const mapSize = {width: 5000, height: 5000}
const bulletSpeed = 50;
const bulletDmg =  20;

var address ;

function moveBullets() {
    Object.entries(bullets).forEach(([bulletID, bulletdata],i)=>{
        let [x,y,angle, distance] = bulletdata
        
        x += bulletSpeed/2 * Math.cos(angle) ;
        y += bulletSpeed/2 * Math.sin(angle) ;

        distance += bulletSpeed
        distance < 2000 ? bullets[bulletID] = [x,y,angle, distance] : delete bullets[bulletID]

    })
}

io.on('connection', (client)=>{
    function collisionCheck(){
        Object.entries(players).forEach(([playerKey, playerValue])=>{
            console.log(bullets)
            Object.entries(bullets).forEach(([bulletKey,[bulletx, bullety]])=>{
                if(bulletKey.includes(playerKey)===false){
                    playerValue.x <= bulletx && bulletx <= (playerValue.x + playerValue.size) 
                    &&
                    playerValue.y <= bullety && bullety <= (playerValue.y + playerValue.size)
                    ?handleCollision(bulletKey, [playerKey, playerValue])
                    :null
                }
            })
        })
    }

    function handleCollision(bulletKey, [playerKey, playerValue]){
        console.log('collision detected');
        players[playerKey].health <= 0 
        ?client.emit('killPlayer', [playerKey, players[playerKey].health])
        :client.emit('colisionCheck', [playerKey, players[playerKey].health])
        
        delete bullets[bulletKey]
    }
    let playerIp = client.handshake.address
    address = client.handshake
    client.emit('playerIP', playerIp)
    client.on('playerData', (player)=>{
        player.ip= playerIp
        players[playerIp] = player
    })
    client.on('createBullet', ([playerIP, timesFired, playerData])=>{
        bulletID = `${playerIP}:${timesFired}`
        bullets[bulletID] = playerData
        bullets[bulletID].push(0)
        console.log('bulletcreated')
    })
    client.emit('mapData', mapSize)
    client.on('subscribeToTimer', (interval) => {
        // console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
          }, interval);
    });
    setInterval(()=>{
    moveBullets();
    collisionCheck();
    console.log(bullets)
    client.emit('bullets', Object.values(bullets))
    client.emit('playerList', Object.values(players))
    },50)
})

setTimeout((stuff)=>{
    console.log(address)

},10000)

const port = 7000;

io.listen(port)
console.log('listening on port: ', port)