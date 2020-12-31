var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var C1wid = 120;
var C1hei = 70;
var C1img = "car1.png";
var C1_x = 10;
var C1_y = 10;
var C2wid = 120;
var C2hei = 70;
var C2img = "car2.png";
var C2_x = 10;
var C2_y = 100;
var background_img = "canvas background.jpg";

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_img;

    C1_imgtag = new Image();
    C1_imgtag.onload = Car1;
    C1_imgtag.src = "car1.png";

    C2_imgtag = new Image();
    C2_imgtag.onload = Car2;
    C2_imgtag.src = "car2.png";
}

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function Car1(){
    ctx.drawImage(C1_imgtag,C1_x,C1_y,C1wid,C1hei);
}

function Car2(){
    ctx.drawImage(C2_imgtag,C2_x,C2_y,C2wid,C2hei);
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == 38){
        C1_up();
        console.log("up arrow key")
    }
    if(keypressed == 40){
        C1_down();
        console.log("down arrow key")
    }
    if(keypressed == 37){
        C1_left();
        console.log("left arrow key")
    }
    if(keypressed == 39){
        C1_right();
        console.log("right arrow key")
    }
    if(keypressed == 87){
        C2_up();
        console.log("w key")
    }
    if(keypressed == 83){
        C2_down();
        console.log("s key")
    }
    if(keypressed == 65){
        C2_left();
        console.log("a key")
    }
    if(keypressed == 68){
        C2_right();
        console.log("d key")
    }
}

