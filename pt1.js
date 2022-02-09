var newdiv;
var modal;
var zindex =9999;
function open_modal() {
    
    var bg = document.getElementById("header-wrap");
    
    newdiv = document.createElement('div');
    newdiv.style.position = "absolute";
    newdiv.style.left = "0px";
    newdiv.style.top = "0px";
    newdiv.style.backgroundColor = "black";
    newdiv.style.width = "100%";
    newdiv.style.height = "1000px";
    newdiv.style.opacity = "0.3";
    newdiv.style.zIndex = zindex;

    bg.appendChild(newdiv);
    
    modal = document.getElementById("modal");
    modal.style.position="absolute";
    modal.style.right="0%";
    modal.style.top="0%";
    modal.style.display="block";
    modal.style.width="20%";
    modal.style.height="100%";
    // modal.style.textAlign="left";
    modal.style.backgroundColor="white";
    modal.style.padding = "20px";
    // modal.style.textAlign="right";
    modal.style.animation="moving";
    modal.style.animationDuration="1s";
    modal.style.zIndex = zindex+1;

}
function close_modal() {
    modal.style.display = "none";
    newdiv.remove();
}
function select() {
    var btg = document.getElementById('before');
    var atg = document.getElementById('after');
    var bcard = document.getElementById('bcard');
    var acard = document.getElementById('acard');
    
    if(event.target == atg){
    bcard.style.display = 'none';
    acard.style.display = 'inline';
    btg.style.color= 'gray';
    } else if (event.target == btg) {
    atg.style.color= 'gray';
    acard.style.display = 'none';
    bcard.style.display = 'inline';
    }
    event.target.style.color = "black";
}
document.addEventListener('scroll',function(){
    var pos = document.documentElement.scrollTop;
    var navtg = document.getElementById("header-nav");
    var ctn = document.getElementById('container');
    var reserveBtn = document.createElement('button');
    if(pos>=200) {
        navtg.style.position='fixed';
        navtg.style.top="0px";
        navtg.style.left="0px";
        navtg.style.width="100%";
        navtg.style.zIndex="99";
        navtg.style.backgroundColor="white";
        navtg.style.borderBottom="2px solid red";

    } else {
        navtg.style.position = "static";
        navtg.style.borderBottom="none";
    }
});
    
function func1_open(){
    var one = document.getElementById('one');
    one.style.display = 'block';
    one.style.zIndex = '98';
}
function func1_close(){
    one.style.display = 'none';
}
function func2_open(){
    var two = document.getElementById('two');
    two.style.display = 'block';
    two.style.zIndex = '98';
}
function func2_close(){
    two.style.display = 'none';
}
function func3_open(){
    var three = document.getElementById('three');
    three.style.display = 'block';
    three.style.zIndex = '98';
}
function func3_close(){
    three.style.display = 'none';
}
function func4_open(){
    var four = document.getElementById('four');
    four.style.display = 'block';
    four.style.zIndex = '98';
}
function func4_close(){
    four.style.display = 'none';
}
function func5_open(){
    var five = document.getElementById('five');
    five.style.display = 'block';
    five.style.zIndex = '98';
}
function func5_close(){
    five.style.display = 'none';
}


function func2_change(){
    var second = document.getElementById('second');
    second.style.zIndex = '101';
}
function func2_back(){
    var second = document.getElementById('second');
    second.style.zIndex = '100';
}
function func3_change(){
    var third = document.getElementById('third');
    third.style.zIndex = '101';
}
function func3_back(){
    var third = document.getElementById('third');
    third.style.zIndex = '100';
}
function func4_change(){
    var fourth = document.getElementById('fourth');
    fourth.style.zIndex = '101';
}
function func4_back(){
    var fourth = document.getElementById('fourth');
    fourth.style.zIndex = '100';
}
function func_open_ct(){
    var menu = document.getElementsByClassName('over_menu');
    var mmm = document.getElementById('menu_tmp');
    for(var i = 0; i<menu.length; i++){
        menu[i].style.display = "block";
        menu[i].style.zIndex = "102";
        // menu[i].style.transition="2s";
        // menu[i].style.animation="menu";
        // menu[i].style.animationDuration="0.5s";
    }
    mmm.style.display = "block";
    mmm.style.zIndex = "101";
    mmm.style.animation="menu";
    mmm.style.animationDuration="0.1s";
}
function func_close_ct(){
    var menu = document.getElementsByClassName('over_menu');
    var mmm = document.getElementById('menu_tmp');
    for(var i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
    mmm.style.display = "none";
}

