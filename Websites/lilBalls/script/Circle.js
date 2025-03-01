class Circle{
    constructor(id, color, x, y, radius){
        this.id = id;
        this.color = color;
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    mouseEvent(xMouse, yMouse){
        const x = Math.abs(xMouse - this.x);
        const y = Math.abs(yMouse - this.y);
        const dist = Math.sqrt(x**2 + y**2);
        console.log(((dist <= this.radius) ? 'Deeper' : 'Put it') + ` | ${this.id} | ${this.color} | ${dist} | x: ${x} & y: ${y}`);
        return dist <= this.radius;
    }

    highlight(x, y, cvs){
        if(this.mouseEvent(x, y)){
            cvs.strokeStyle = this.color;
            cvs.fillStyle = this.color;
            this.drawSelf(cvs);
            cvs.fill();
            cvs.closePath();
        } else {
            this.drawSelf(cvs);
            cvs.closePath();
        }
    }

    increase(x, y, cvs){
        if(this.mouseEvent(x, y)){
            this.radius += 1;
            this.highlight(x, y, cvs);
        } else {
            this.drawSelf(cvs);
            cvs.closePath();
        }
    }

    drawSelf(cvs){
        cvs.beginPath();
        cvs.strokeStyle = this.color;
        cvs.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        cvs.stroke();
    }

    toString(){
        return `id = ${this.id} |
               color = <span style="color:${this.color};">${this.color}</span> |
               x = ${this.x} |
               y = ${this.y} |
               radius = ${this.radius}`;
    }
}

export default Circle;