class Particle{
    constructor(x, y){
        this.x = x
        this.y = y
        this.c = color(random(255), random(255), random(255))
        this.size = random(4, 7)
        this.vector = p5.Vector.random2D().mult(random(1,15));
        this.gravity = 1;
    }
    draw(){
        fill(this.c)
        ellipse(this.x, this.y, this.size)
    }
    update(){
        this.x = this.x + this.vector.x
        this.y = this.y + this.vector.y
        this.vector.y += this.gravity
    }
}

