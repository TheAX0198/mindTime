import Moveable from './Moveable.js';
import Entity from './Entity.js';

const svg = document.querySelector('svg');

const item = new Moveable(document.getElementById('item'), 100);
const voidWall = document.getElementById('voidWall');

document.addEventListener('keypress', evt => {
    const key = evt.key;
    
    if(key === 'w'){
        item.move('up', voidWall);
    }
    if(key === 's'){
        item.move('down', voidWall);
    }
    if(key === 'a'){
        item.move('left', voidWall);
    }
    if(key === 'd'){
        item.move('right', voidWall);
    }
    
});
