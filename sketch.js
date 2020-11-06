const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var monster1,monster2,monster3;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;

function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(1250,700);
  wall1 = new wall(50,200,100,20);
  wall2 = new wall(50,300,100,20);
  wall3 = new wall(180,450,340,20);
  wall4 = new wall(600,525,500,20);
  wall5 = new wall(350,500,20,70);
  wall6 = new wall(350,90,20,100);
  wall7 = new wall(400,130,100,20);
  wall8 = new wall(450,250,20,250);
  wall9 = new wall(540,370,200,20);
  wall10 = new wall(640,230,20,300);
  wall11 = new wall(700,70,150,20);
  wall12 = new wall(780,170,150,20);
  wall13 = new wall(850,100,20,120);
  wall14 = new wall(70,50,20,120);
  wall15 = new wall(100,100,120,20);
  wall16 = new wall(1000,300,20,420);
  wall17 = new wall(1100,500,220,20);
  wall18 = new wall(1200,300,20,420);
  wall19 = new wall(1100,100,220,20);
  wall20 = new wall(625,650,1250,20);

  monster1 = new monster(50,70);
  allein1 = new allein(250,500);

}

function draw() {
  background(0);  
  Engine.update(engine);
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  monster1.display();
  allein1.display();

}