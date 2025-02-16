let canvas = document.getElementById('canvas');
let ctr = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 300;
canvas.style.border = '1px dashed white';
canvas.parentElement.style.display = 'flex';
canvas.parentElement.style.justifyContent = 'center';

let x = 1;
let y = 0;
let modifier = 25;

ctr.lineWidth = "600";
ctr.strokeStyle = "crimson";

function anim(){
    ctr.beginPath();
    ctr.clearRect(0, 0, 600, 300);

    ctr.arc(300, 150, 200, 0, 2 * Math.PI);

    ctr.moveTo(x-80, y-40);

    ctr.lineTo(x, y);
    //ctr.stroke();

    x += modifier*2;
    y += modifier;

    if(y >= 300 && x >= 800){
        modifier += 1;
        x = 1;
        y = 0;
    }

    if(modifier >= 40)
        modifier = 25;

    //ctr.closePath();
    //ctr.beginPath();
    
    ctr.stroke();

    window.requestAnimationFrame(anim);
}

anim();

//