const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraints = Matter.Constraints;

var bg;
var world,engine;
var hero,monster;
var ground,ground1;
var block1,block2,block3;


function preload() {
//preload the images here
bg = loadImage("images/sky.jpg");


}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground (100,400,1200,20);
  ground1 = new Ground(0,0,20,1200)
  hero = new Hero (50,170,200,200);
  
  block1= new Block(288,350,40,150);
  block2= new Block(280,350,40,150);
  monster = new Monster (300,200,250,250);

  Engine.run(engine);



}

function draw() {
  background(bg);
  hero.display();
  monster.show();
  ground.show();
  block1.display();
  block2.display();
  ground1.show();



}

