function getRndColor(){
    var colorPossible = 'abcdefABCDEF1234567890'
    var colorString = '#'
    for(var i = 0; i < 6; i++){
        colorString += colorPossible[Math.floor(Math.random()*22)]
    }
    return colorString;
}

class UserSquare {
    constructor(x, y, size, playerName, color){
        this.player = playerName;
        this.size = size;
        this.health = 100;
        this.power = 100;
        this.speed = 0
        this.maxSpeed = 30;
        this.angle= 0;
        this.x = x+this.size/2;
        this.y = y+this.size/2;
        this.color = color || getRndColor();
        this.checkKeys = (keys)=>{
        var { w,a,s,d } = keys;
        // console.log(keys)
        // console.log()
        // console.log(this.speed)

        if(this.speed <= this.maxSpeed){
            this.speed += w === true ? 2 : 0
        }
        if(this.speed > 0){            
            this.speed -= s === true && this.speed > 0? 1 : 0
            this.speed -= .5
        }else{
            this.speed = 0
        }
            
        this.x += this.speed/2 * Math.cos(this.angle) ;
        this.y += this.speed/2 * Math.sin(this.angle) ;
        return [this.x,this.y]

    }
        
}
setAngle = (angle)=>{
    // console.log('angle set')
    this.angle = angle
    // console.log(this.angle)
}
    

}

var playerSquare = (player, ctx)=>{
    var x_pos = player.x
    var y_pos = player.y
    var r_pos = player.angle
    var color = player.color
    var maxHealth = 100;
    var health = player.health
    var percent = health/maxHealth
    var playerName = player.userName
    
    var size = player.size;
    var angle = r_pos;
    var x_center = x_pos + size/2
    var y_center = y_pos + size/2
    ctx.save();
    ctx.fillStyle= color;
    ctx.translate(x_center,y_center);
    ctx.rotate(angle)
    ctx.translate(-(x_center),-(y_center));
    ctx.fillRect(x_pos, y_pos, size, size);
    ctx.restore();
    
    ctx.save()
    
    
    ctx.fillStyle = "red";
    ctx.fillRect(x_pos, y_pos - 20, size * percent, 12);
    
    // ctx.fillStyle = "black";
    // ctx.fillRect(x_pos, y_pos - 10, size, 20);
    ctx.fillStyle = "Black";
    ctx.font = "18px sans-serif";
    ctx.fillText(percent * 100 +"%", x_pos, y_pos-20);
    ctx.fillText(playerName, x_pos, y_center);
    ctx.restore();
}

var drawBullet = ([x,y,angle], ctx)=>{
    var x_pos = x
    var y_pos = y;
    var size = 20;
    
    ctx.save();
    ctx.fillRect(x_pos, y_pos, size, size);
    ctx.restore();
}

export { playerSquare, drawBullet, UserSquare }