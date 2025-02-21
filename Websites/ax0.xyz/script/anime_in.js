let canvas = document.getElementById('canvas');
let ctr = canvas.getContext("2d");

const WIDTH = canvas.width = 800;
const HEIGHT = canvas.height = 400;
canvas.style.border = '1px dashed white';
canvas.parentElement.style.display = 'flex';
canvas.parentElement.style.justifyContent = 'center';

anim();

function anim(){
    ctr.lineWidth = "1";
    ctr.strokeStyle = "white";
}

let temps = 0;
let x = 0;
let prevX = x;
let a = 200;
let b = 0.02;
let h = 0;
let k = HEIGHT/2;
let prevY = a * Math.sin(b * (x - h)) + k;
setInterval(sinuso, 1000*(1/60));
function sinuso(){

    //let prevX = h;
    //let prevY = a * Math.sin(b * (0 - h)) + k;

    let y = a * Math.sin(b * (x - h)) + k;
    line(prevX, prevY, x + h, y);

    prevX = x + h;
    prevY = y;

    ctr.stroke();

    if(x >= 805){
        console.log(temps);
        temps = 0;
        
        x = 0;
        prevX = x;
        prevY = a * Math.sin(b * (x - h)) + k;
        ctr.clearRect(0, 0, WIDTH, HEIGHT);
    } else x++;
    
    temps += 1000*(1/60);

}

function line(x, y, endX, endY){
    ctr.beginPath(); 
    ctr.moveTo(x, y);
    ctr.lineTo(endX, endY);
    ctr.stroke();
}

function triMetric(x1, y1, x2, y2, x3, y3){
    ctr.beginPath(); 
    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x1, y1);
    ctr.stroke();
}

function triDeg(x, y, a1, l1, a2, l2){
    ctr.beginPath(); 
    let x1 = Math.cos(-(Math.PI * a1 / 180)) * l1 + x;
    let y1 = Math.sin(-(Math.PI * a1 / 180)) * l1 + y;
    line(x, y, x1, y1);

    let x2 = Math.cos(-(Math.PI * a2 / 180)) * l2 + x1;
    let y2 = Math.sin(-(Math.PI * a2 / 180)) * l2 + y1;
    line(x1, y1, x2, y2);

    line(x2, y2, x, y);

    ctr.stroke();
}







function upsideDownMultiTriangle(){
    triDeg(WIDTH/2, HEIGHT/2, 45, 100, -45, 100);
    triDeg(WIDTH/2, HEIGHT/2, 135, 100, -135, 100);

    triDeg(WIDTH/2, HEIGHT/2, -45, 100, 45, 100);
    triDeg(WIDTH/2, HEIGHT/2, -135, 100, 135, 100);

    let xPos = Math.cos(-(Math.PI * 135 / 180)) * 100;
    let yPos = Math.sin(-(Math.PI * 135 / 180)) * 100;

    triDeg(xPos + WIDTH/2, yPos + HEIGHT/2, -45, 100, 45, 100);
    triDeg(xPos + WIDTH/2, yPos + HEIGHT/2, -135, 100, 135, 100);

    triDeg(xPos + 2*-xPos + WIDTH/2, yPos + HEIGHT/2, -45, 100, 45, 100);
    triDeg(xPos + WIDTH/2, -yPos + HEIGHT/2, -45, 100, 45, 100);
}


/*
let x = 1;
let y = 0;
let modifier = 25;

ctr.lineWidth = "600";
ctr.strokeStyle = "crimson";

function animCursed(){
    ctr.beginPath();
    ctr.clearRect(0, 0, 600, 300);

    ctr.arc(300, 150, 200, 0, 2 * Math.PI);

    ctr.moveTo(x-80, y-40);

    ctr.lineTo(x, y);
    //ctr.stroke();

    x += modifier*2;
    y += modifier;

    if(y >= 300 && x >= 800){
        modifier += 20;
        x = 1;
        y = 0;
    }

    if(modifier >= 40)
        modifier = 25;

    //ctr.closePath();
    //ctr.beginPath();
    
    ctr.stroke();

    window.requestAnimationFrame(animCursed);
}
*/
