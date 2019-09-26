
function drawJs(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    canvas.width = 750;
    canvas.height = canvas.width;
    var game = new Map(map1);
    var start = {x:25,y:75}
    var pentagon = new Pentagon(start.x,start.y,35,'#00ff00', map1)
    var triangle = new Triangle(start.x,start.y,35,'#00ffff', map1)
    console.log(pentagon)
    game.create(canvas)
    pentagon.start(5)
    triangle.start(2)
    var draw = ()=>{
        requestAnimationFrame(draw);
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    
        now = Date.now();
        elapsed = now - then;
    
        if (elapsed > fpsInterval) {
            pentagon.draw(ctx)
            triangle.draw(ctx)
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