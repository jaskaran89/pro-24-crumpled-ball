const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,  engine, world, dustbin, paper;

function setup() {
    createCanvas(800, 400);

    rectMode(CENTER);


    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    dustbin = new Dustbin (720, 390, 100, 10);
    paper = new Paper(100, 300, 10);
    ground = Bodies.rectangle(width / 2, 400, width, 10, {
        isStatic: true
    });
    World.add(world, ground);
}

function draw() {

  
        background("black");
       
  
    
        dustbin.display();
        paper.display();

    }



function keyPressed() {
    if (keyCode === UP_ARROW ) {
        Matter.Body.applyForce(paper.body, paper.body.position, {  x: 14,y: -13});
    }
}