import Circle from "./Circle.js";

const divInfo = document.querySelector('div');
const canvas = document.querySelector('canvas');
const cvs = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;
cvs.lineWidth = 2;

let id = 0;
const data = [];

canvas.addEventListener('mousemove', (evt) => {
    cvs.clearRect(0, 0, 600, 400);

    console.clear();

    const rect = canvas.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    console.log(`x: ${x} | y: ${y}`);
    
    
    for(let obj of data){
        obj.highlight(x, y, cvs);
    }
});

canvas.addEventListener('click', (evt) => {
    cvs.clearRect(0, 0, 600, 400);

    console.clear();

    const rect = canvas.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    
    for(let obj of data){
        obj.increase(x, y, cvs);
    }

    displayInfo();
});


function draw(x, y, radius, c){
    cvs.strokeStyle = c;
    cvs.beginPath();
    cvs.arc(x, y, radius, 0, 2*Math.PI, false);
    cvs.stroke();
    cvs.closePath();

    data.push(new Circle(id, c, x, y, radius));
    id++;
    displayInfo();
}

draw(200, 300, 10, 'snow');
draw(300, 200, 10, 'royalblue');
draw(400, 100, 10, 'crimson');

function displayInfo(){
    divInfo.innerHTML = '';
    for(let obj of data){
        divInfo.innerHTML += '<p>' + obj.toString() + '</p>';
    }
}