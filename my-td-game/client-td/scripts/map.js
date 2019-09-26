// 1=right, 2=down, 3=left, 4=up, 0=barrier, 8=end
const map1 = 
[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
0,2,3,3,3,3,3,3,3,3,3,3,3,0,0,
0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,2,0,0,0,0,1,1,1,1,1,1,1,2,0,
0,2,0,0,0,1,4,0,0,0,0,0,0,2,0,
0,2,0,0,0,4,0,0,0,0,0,0,0,2,0,
0,1,1,1,1,4,0,2,3,3,0,0,0,2,0,
0,0,0,0,0,0,0,2,0,4,3,3,3,3,0,
0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,1,1,8,0,0,0,0,0
]

function Map(map){
    this.map = map;
}

Map.prototype.create = function (canvas) {
    console.log(canvas, this.map)
    const mapCont = document.getElementById('map-cont');
    const path = document.getElementById('path-overlay');
    mapCont.innerHTML = "";
    path.innerHTML = "";
    this.map.forEach(squareCode => {
        let color =  squareCode === 0 ? "black" : squareCode === 8? "red" : "blue";
        let div = document.createElement('div');
        let div1 = document.createElement('div');
        div.classList.add('box')
        div1.classList.add('box')
        squareCode === 0 ? div.classList.add('box-border') : squareCode === 8 ? div.classList.add('box-end') : div.classList.add('box-path')
        squareCode === 0 ? div1.classList.add('path-placeholder') : squareCode === 8 ? div1.classList.add('path-end') : div1.classList.add('path-path')
        mapCont.appendChild(div)
        path.appendChild(div1)

    });   
}