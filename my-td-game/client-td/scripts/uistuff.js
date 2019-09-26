function uiStuff(){
    var towerCont = document.getElementById('tower-cont')

    var basicTower = document.getElementById('basic-tower');
    var basicTowerBackground = document.getElementById('basic-tower-back')

    var bombTower = document.getElementById('bomb-tower');
    var bombTowerBackground = document.getElementById('bomb-tower-back');

    var freezeTower = document.getElementById('freeze-tower');
    var freezeTowerBackground = document.getElementById('freeze-tower-back');

    towerCont.addEventListener('click', (e)=>{
        if(e.target.classList.contains('shape-overlay')){
            switch(e.target.id){
                case "basic-tower":
                    console.log('basic-tower')
                    console.log(basicTowerBackground)
                    basicTowerBackground.classList.add("active")
                    bombTowerBackground.classList.remove("active")
                    freezeTowerBackground.classList.remove("active")
                    break;
                case "bomb-tower":
                    console.log("bomb-tower")
                    basicTowerBackground.classList.remove("active")
                    bombTowerBackground.classList.add("active")
                    freezeTowerBackground.classList.remove("active")
                    break;
                case "freeze-tower":
                    console.log("freeze-tower")
                    basicTowerBackground.classList.remove("active")
                    bombTowerBackground.classList.remove("active")
                    freezeTowerBackground.classList.add("active")
                    break;
            }
        }
    })
    document.addEventListener('keyup', (e=>{
        console.log(e)
        switch(e.key){
            case "Escape":
                basicTowerBackground.classList.remove("active")
                bombTowerBackground.classList.remove("active")
                freezeTowerBackground.classList.remove("active")
                break
        }
    }))
}