function Shape(left, top, size, color, map=[], health, value){
    this.left = left || 0;
    this.top = top || 0;
    this.size =  size || 0;
    this.color = color || "#000000";
    this.health = health || 100;
    this.value = value || 1;
    this.path = [];
    this.speed = 2
    var pathNotFinished = true;
    var index = 0
    while(pathNotFinished){
            if(map[index] === 1){
                this.path.push(map[index])
                index +=  1
            }
            if(map[index]=== 2){
                this.path.push(map[index])
                index += 15
            }
            if(map[index]=== 3){
                this.path.push(map[index])
                index -= 1
            }
            if(map[index]===4){
                this.path.push(map[index])
                index -= 15
            }
            if(map[index]===8){
                pathNotFinished = false
            }
            if(map[index] === 0){
                index++
            }
            if(map.length === 0){
                pathNotFinished = false
            }
            // console.log(index, map[index], map)
    }
        
        
    
}




Shape.prototype.set = function(left, top, color, width, height ){
    this.left = left;
    this.top = top;
    this.color = color || this.color;
    this.width = width || this.width;
    this.height = height || this.height;
}

Shape.prototype.takeHit = function(damage){
    this.health -= damage || 0;
    if(this.health>0){
        return true;
    }
    return false;
}
Shape.prototype.start = function(){
    setInterval(()=>{
        this.move()
    },1000/this.speed)
}

Shape.prototype.move = function(){
    var direction = this.path.shift();
    direction === 1 
    ?this.left += 50
    :direction === 2
    ?this.top +=50
    :direction === 3
    ?this.left -=50
    :direction === 4
    ?this.top -= 50
    :null
}
function Triangle(left, top, size, color, map=[], health, value){
    Shape.apply(this, arguments);
    this.speed =  4
    this.draw = function(ctx){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this.left - this.size/2, this.top + this.size/2);
    ctx.lineTo(this.left, this.top - this.size/2);
    ctx.lineTo(this.left + this.size/2, this.top + this.size/2);
    ctx.lineTo(this.left - this.size/2, this.top + this.size/2);
    ctx.fillStyle = this.color
    ctx.fill();
    ctx.restore();
    }
}
Triangle.prototype = new Shape();

function Square(left, top, size, color, map=[], health, value){
    Shape.apply(this, arguments);
    this.draw = function(ctx){
    ctx.save();
    ctx.fillStyle = this.color
    ctx.strokeRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
    ctx.restore();
    }
}


function Pentagon(left, top, size, color, map=[], health, value){
    Shape.apply(this, arguments);
    this.speed = 2
    this.draw = function(ctx){
    ctx.save();
    ctx.beginPath()
    ctx.lineWidth = 5;
    ctx.translate(this.left,this.top)
    ctx.rotate((108 * Math.PI)/180)
    for(var i = 0; i <5; i++){
        ctx.lineTo( + this.size/2 * 0.618, -this.size/2 * .84);
        ctx.rotate((72 * Math.PI)/180);
    }
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath();
    ctx.restore()
    console.log('hi')
    }
}


Triangle.prototype = new Shape();
Square.prototype = new Shape();
Pentagon.prototype = new Shape()