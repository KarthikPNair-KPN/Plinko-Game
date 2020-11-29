const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,790,480,20);

    for(var a = 0;a <= width;a = a + 80){
        divisions.push(new Division(a,height - divisionHeight/2,10,divisionHeight));  
    }

    for(var b = 40;b <= width;b = b + 50){
        plinkos.push(new Plinko(b,75));
    }

    for(var b = 15;b <= width - 10;b = b + 50){
        plinkos.push(new Plinko(b,175));
    }

    for(var b = 40;b <= width;b = b + 50){
        plinkos.push(new Plinko(b,275));
    }

    for(var b = 15;b <= width - 10;b = b + 50){
        plinkos.push(new Plinko(b,375));
    }
}

function draw() {
    background(0); 
    Engine.update(engine);

    

    for(var a = 0;a < divisions.length;a++){
        divisions[a].display();
    }

    

    for(var b = 0;b < plinkos.length;b++){
        plinkos[b].display();
    }

    if(frameCount % 60 === 0){
        particles.push(new Particle(random(width/2 - 10,width/2 + 10),10,10));
    }

    for(var c = 0;c < particles.length;c++){
        particles[c].display();
    }

    ground.display();
    
    
}