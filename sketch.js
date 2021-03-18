const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var basket,basketIMG, ball , ballIMG,ground;
var score = 0;


function preload(){
  ballIMG = loadImage("ball.jpg");
  basketIMG = loadImage("basket.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,390,1590,20);


 ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  basket = Bodies.circle(1150,380,20);
  World.add(world,basket);

  SlingShot = new SlingShot(this.ball,{x:100,y:200});

    
}

function draw(){
  background ("cyan");
  text("Score: "+ score, 500,50);
  
  Engine.update(engine);
  
  ground.display();
  
  imageMode(CENTER)
  image(ballIMG,ball.position.x,ball.position.y,40,40);
  image(basketIMG,basket.position.x,basket.position.y,50,50);
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  SlingShot.fly();
}

if(ball.isTouching(basketIMG)){
score = score +1;
}

