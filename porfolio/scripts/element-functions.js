function elementFunctions(){

    var pageScoll = window.scrollY;
    var body = document.querySelector('body');
    var indexView = document.getElementById("index_view");
    var contentView = document.getElementById('content_view')
    var aboutMeView = document.getElementById('about-me-view')
    var toolbar = document.getElementById("head-toolbar");
    var flashScreen = document.getElementById("flash");
    var scorpionImg = document.getElementById('scorpion-img');
    var hornetImg = document.getElementById('hornet-img');
    var cheifImg = document.getElementById('cheif-img');
    var scorpion = document.getElementById('scorpion1')
    var hornet = document.getElementById('hornet1')
    var cheif = document.getElementById('cheif')
    var shader =  document.getElementById('shader');
    var loadFrame = document.getElementById('animation-frame');
    var indexViewMouse = document.getElementById('circle-glass');
    var view = 0;
    var flash = false;

   

    function mouseFunc() {
        if(window.Event) {
            document.captureEvents(Event.MOUSEMOVE)
        }
        document.onmousemove = mouse
    }

    var mouse = (e)=> {
        var x = e.clientX + document.documentElement.scrollLeft;
        var y = e.clientY + document.documentElement.scrollTop;
        indexViewMouse.style.left = `${x-100}px`
        indexViewMouse.style.top = `${y-100-63}px`
    }
    function scrollFunc(){

            function toolBar(){
                if(pageScoll!= 0){
                    toolbar.classList.add('active');
                    body.style.cursor = 'default'
                } else {
                    toolbar.classList.remove('active');
                    body.style.cursor = 'none'
                }
            }

            function indexViewOpacity(){
                indexView.style.opacity = `${((-pageScoll+indexView.clientHeight)/indexView.clientHeight)}`;
            }
            
            function indexViews(){
                if(pageScoll === 0){
                    indexView.classList.contains('active') ? indexView.classList.remove('active') : null
                    mouseFunc()
                }else{
                    indexView.classList.contains('active') ? null : indexView.classList.add('active')
                }
            }

            function moveImages(){
                var sof2 = document.getElementById('ship-1');
                var phantom1 = document.getElementById('phantom-1');
                var pelican1 = document.getElementById('pelican-1');

                var timeout1;
                if(pageScoll>0){
                    sof2.style.display = `block`
                    sof2.style.right = `${pageScoll*8/3-600}px`
                    sof2.style.top = `${indexView.clientHeight}px`

                    phantom1.style.display = `block`
                    phantom1.style.right = `${2 * pageScoll/3 * Math.sin(3 * Math.PI/4) -300}px`
                    phantom1.style.top = `${2 * pageScoll/3 * Math.cos(3 * Math.PI/4) + indexView.clientHeight +600}px`
                } else {
                    sof2.style.display = `none`
                }

                if(pageScoll>indexView.clientHeight - 3* indexView.clientHeight/4 && pageScoll < indexView.clientHeight +63){
                    pelican1.style.display = `block`
                    pelican1.style.right = `${3*pageScoll/4-50}px`
                    pelican1.style.top = `${3*pageScoll/4 +4 * indexView.clientHeight/5}px`
                    pelican1.style.width = `${pageScoll}px`
                } else {
                    pelican1.style.display = `none`
                }
                if(pageScoll>indexView.clientHeight + 100 && pageScoll< contentView.clientHeight + indexView.clientHeight){

                    // border1.style.display = `block`;
                    // border1.style.top =  `${indexView.clientHeight + 200}px`
                    contentView.classList.add('active');

                    flash? null:flashScreen.style.animation = "flash 2s linear 1";
                    
                    flash=true
                    timeout1 = setTimeout(()=>{
                        flashScreen.style.animation = "none";
                    },2000)
                } else {
                    flash=false
                    clearTimeout(timeout1);

                    // border1.style.display = `none`
                    contentView.classList.remove('active')
                    
                } 
            }
            function aboutMePage(){
                (pageScoll > 3 * indexView.clientHeight && pageScoll < 4 * indexView.clientHeight  ) ? 
                    aboutMeView.classList.contains('active') ?
                    null : 
                    aboutMeView.classList.add('active') :
                    aboutMeView.classList.contains('active') ?
                    aboutMeView.classList.remove('active') :
                    null;
                
            }
            function bodyBackground(){
                    if(pageScoll>indexView.clientHeight +100){
                        body.classList.add('about');
                    }else{
                        body.classList.remove('about');
                    }
                }
            indexViews();
            toolBar();
            indexViewOpacity();
            moveImages();
            bodyBackground();
            aboutMePage();

        window.addEventListener("scroll", (e)=>{
            pageScoll = window.scrollY;
            indexViews();
            toolBar();
            indexViewOpacity();
            moveImages()
            bodyBackground();
            aboutMePage();
        })
    }

    function hoverFunc() {
        window.addEventListener('mouseover', (e)=>{
            if(e.target == scorpionImg){
                scorpionImg.setAttribute('src', './images/scorpion-yellow-high.png');
                scorpionImg.style.zIndex = '4';
                scorpion.classList.contains('hover') && view === 0? null : view ===0? scorpion.classList.add('hover'):null;
            } else {
                scorpionImg.setAttribute('src', './images/scorpion-blue-high.png');
                scorpionImg.style.zIndex = '0';
                scorpion.classList.contains('hover') ? scorpion.classList.remove('hover'):null;

            }
            if(e.target == hornetImg){
                hornetImg.setAttribute('src', './images/hornet-yellow-high.png');
                hornetImg.style.zIndex = '4';
                hornet.classList.contains('hover') ? null :view ===0?hornet.classList.add('hover'):null;
            } else {
                hornetImg.setAttribute('src', './images/hornet-blue2-high.png');
                hornetImg.style.zIndex = '0';
                hornet.classList.contains('hover') ? hornet.classList.remove('hover'):null;
            }
            if(e.target == cheifImg){
                cheifImg.setAttribute('src', './images/master-cheif3-yellow-high.png')
                cheifImg.style.zIndex = '4';
                cheif.classList.contains('hover') ? null : view===0 ? cheif.classList.add('hover'):null;
            } else {
                cheifImg.setAttribute('src', './images/master-cheif3-blue-high.png')
                cheifImg.style.zIndex = '0';
                cheif.classList.contains('hover')? cheif.classList.remove('hover') : null;
            }
            if (e.target.id === 'scorpion-img' || e.target.id === 'hornet-img' || e.target.id === 'cheif-img'){
                console.log(e)
                if(shader.classList.contains('show')){}else{shader.classList.add('show')}
            } else {
                if(shader.classList.contains('show')){shader.classList.remove('show')}
            }
        })
    }

    ///////////////// Project animation functions/////////////////////////////////////

    function scorpionLeave(){
        scorpion.classList.add(`leave`);
        setTimeout(()=>{
            loadFrame.classList.remove(`load`);
            scorpion.classList.add('hidden');
        },2000)
    }
    function hornetLeave(){
        hornet.classList.add(`leave`);
        setTimeout(()=>{
            loadFrame.classList.remove(`load`);
            hornet.classList.add('hidden');
        },2000)
    }
    function cheifLeave(){
        cheif.classList.add(`leave`);
        setTimeout(()=>{
            loadFrame.classList.remove(`load`);
            cheif.classList.add('hidden');
        },2000)
    }
    
    function scorpionView(){
        scorpion.classList.add(`active`);
    }
    function hornetView(){
        hornet.classList.add(`active`);
    }
    function cheifView(){
        cheif.classList.add(`active`);
    }
    function scorpionCheckActive(){
        if(scorpion.classList.contains(`active`)){scorpion.classList.remove(`active`)};
    }
    function hornetCheckActive(){
        if(hornet.classList.contains(`active`)){hornet.classList.remove(`active`)};
    }
    function cheifCheckActive(){
        if(cheif.classList.contains(`active`)){cheif.classList.remove(`active`)};
    }
    function scorpionCheckHidden(){
        if(scorpion.classList.contains(`hidden`)){scorpion.classList.remove(`hidden`)}
    }
    function hornetCheckHidden(){
        if(hornet.classList.contains(`hidden`)){hornet.classList.remove(`hidden`)};
    }
    function cheifCheckHidden(){
        if(cheif.classList.contains(`hidden`)){cheif.classList.remove(`hidden`)};
    }
    function scorpionCheckLeave(){
        if(scorpion.classList.contains(`leave`)){scorpion.classList.remove(`leave`)};
    }
    function hornetCheckLeave(){
        if(hornet.classList.contains(`leave`)){hornet.classList.remove(`leave`)};
    }
    function cheifCheckLeave(){
        if(cheif.classList.contains(`leave`)){cheif.classList.remove(`leave`)};
    }
    
    /////////////////////////////////////////////////////////////////////////////

    function projectsClicked(){
        var viewInterface = false;
        contentView.addEventListener('click', (e)=>{
            if(viewInterface===false){
                if(e.target == scorpionImg) {
                    viewInterface = true;
                    loadFrame.classList.add(`load`);
                    scorpionView();
                    hornetLeave();
                    cheifLeave();
                    view =1
                } 
                if(e.target == hornetImg) {
                    viewInterface = true;
                    loadFrame.classList.add(`load`);
                    scorpionLeave();
                    hornetView();
                    cheifLeave();
                    view =1
                }
                if(e.target == cheifImg) {
                    viewInterface = true;
                    loadFrame.classList.add(`load`);
                    scorpionLeave();
                    hornetLeave();
                    cheifView();
                    view =1
                }
            }
            else{
                if(e.target == scorpionImg || e.target == hornetImg || e.target == cheifImg){
                    viewInterface = false;
                    loadFrame.classList.add(`load`);
                    scorpionCheckHidden();
                    hornetCheckHidden();
                    cheifCheckHidden();
                    
                    scorpionCheckLeave();
                    hornetCheckLeave();
                    cheifCheckLeave();
                    
                    scorpionCheckActive();
                    hornetCheckActive();
                    cheifCheckActive();

                    view = 0

                    setTimeout(()=>{
                        loadFrame.classList.remove(`load`)
                    },2000)
                }
            }
            
        })
    }
    scrollFunc();
    hoverFunc();
    projectsClicked();
}