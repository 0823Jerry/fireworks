let ps = [];
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(1,1,1)
    console.log(p5.Vector.random2D())
}
function draw(){
    background(0,30)

    for(let l in ps){
        ps[l].draw()
        ps[l].update()
    }
    ps = ps.filter((p) => {
        return p.y < height
     });
}

function mousePressed(){
    for(var i = 0; i < 25; i++){
        ps.push(new Particle(mouseX, mouseY))

    }
}