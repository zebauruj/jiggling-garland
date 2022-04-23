const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7;
var s1;
function setup() {
  createCanvas(600,800);
  engine = Engine.create();
  world = engine.world;
  b1=new Paper(300,50);
  b2=new Paper(340,80);
  b3=new Paper(380,100);
  b4=new Paper(420,120);
  b5=new Paper(460,100);
  b6=new Paper(500,80);
  b7=new Paper(540,50);

  b8=new Paper(260,80);
  b9=new Paper(220,100);
  b10=new Paper(180,120);
  b11=new Paper(140,100);
  b12=new Paper(100,80);
  b13=new Paper(60,50);

  s1=new Slingshot(b1.body,{x:300,y:50});
  s2=new Slingshot2(b1.body,b2.body);
  s3=new Slingshot2(b2.body,b3.body);
  s4=new Slingshot2(b3.body,b4.body);
  s5=new Slingshot2(b4.body,b5.body);
  s6=new Slingshot2(b5.body,b6.body);
  s7=new Slingshot2(b6.body,b7.body);

  s8=new Slingshot2(b1.body,b8.body);
  s9=new Slingshot2(b8.body,b9.body);
  s10=new Slingshot2(b9.body,b10.body);
  s11=new Slingshot2(b10.body,b11.body);
  s12=new Slingshot2(b11.body,b12.body);
  s13=new Slingshot2(b12.body,b13.body);
}

function draw() {
  background(random(0,255),random(0,255),random(0,255)); 
  Engine.update(engine);
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
  s11.display();
  s12.display();
  s13.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
}