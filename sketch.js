const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope,fruit,fruitcon

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,690,600,20);
fruit=Bodies.circle(300,300,20)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  rope=new Rope(8,{x:245,y:10})
  Matter.Composite.add(rope.body,fruit)
  fruitcon=new Link(rope,fruit)
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  Engine.update(engine);
  ellipse(fruit.position.x,fruit.position.y,20,20)

 
   
}
