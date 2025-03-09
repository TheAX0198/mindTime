import Entity from "./Entity.js";

export default class Moveable extends Entity{

    constructor(elm = new HTMLElement(), step = new Number()){
        super(elm);
        this.step = step;
        this.mapWidth = Number(elm.parentElement.getAttribute('width'));
        this.mapHeight = Number(elm.parentElement.getAttribute('height'));
    }

    move(direction = new String(), wall = new HTMLElement()){
        if(!this.collision(direction, wall)){
            switch(direction){
                case 'up':
                    super.setY(super.getY() - this.getStep());
                    break;
                case 'down':
                    super.setY(super.getY() + this.getStep());
                    break;
                case 'left':
                    super.setX(super.getX() - this.getStep());
                    break;
                case 'right':
                    super.setX(super.getX() + this.getStep());
                    break;
            }
        }
    }

    collision(direction = new String(), collider = new HTMLElement()){

        for(const child of collider.querySelectorAll('#hitbox')){
            if(direction === 'up'){
                if(super.getBorderUp() === 0 || (super.getX() === Number(child.getAttribute('x')) && super.getBorderUp() === Number(child.getAttribute('y')) + Number(child.getAttribute('height'))))
                    return true;
            }
            else if(direction === 'down'){
                if(super.getBorderDown() === this.mapHeight || (super.getX() === Number(child.getAttribute('x')) && super.getBorderDown() === Number(child.getAttribute('y'))))
                    return true;
            }
            else if(direction === 'left'){
                if(super.getBorderLeft() === 0 || (super.getY() === Number(child.getAttribute('y')) && super.getBorderLeft() === Number(child.getAttribute('x')) + Number(child.getAttribute('width'))))
                    return true;
            }
            else if(direction === 'right'){
                if(super.getBorderRight() === this.mapWidth || (super.getY() === Number(child.getAttribute('y')) && super.getBorderRight() === Number(child.getAttribute('x'))))
                    return true;
            }
        }
    }

    getStep(){ return this.step; }
    setStep(step = new Number()){ this.step = step; }

}