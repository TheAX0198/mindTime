export default class Entity{

    constructor(elm = new HTMLElement()){
        this.elm = elm;
    }

    // POSITIONS
    getX(){ return Number(this.elm.firstElementChild.getAttribute('x')); }
    getY(){ return Number(this.elm.firstElementChild.getAttribute('y')); }

    setX(x = new Number()){
        for(let child of this.elm.children)
            if(child.id === 'sprite' || child.id === 'hitbox')
                child.setAttribute('x', x); 
    }
    setY(y = new Number()){
        for(let child of this.elm.children)
            if(child.id === 'sprite' || child.id === 'hitbox')
                child.setAttribute('y', y); 
    }

    // DIMENSIONS
    getWidth(){ return Number(this.elm.firstElementChild.getAttribute('width')); }
    getHeight(){ return Number(this.elm.firstElementChild.getAttribute('height')); }

    setWidth(width = new Number()){
        for(let child of this.elm.children)
            if(child.id === 'sprite' || child.id === 'hitbox')
                child.setAttribute('width', width);
    }
    setHeight(height = new Number()){
        for(let child of this.elm.children)
            if(child.id === 'sprite' || child.id === 'hitbox')
                child.setAttribute('height', height);
    }

    // BORDERS
    getBorderUp(){ return this.getY(); }

    getBorderDown(){ return this.getY() + this.getHeight(); }

    getBorderLeft(){ return this.getX(); }

    getBorderRight(){ return this.getX() + this.getWidth(); }
}