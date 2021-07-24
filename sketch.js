const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5,box6;
var box7, box8,box9, box10;
var box11, box12, box13;
var box14;
var block1, block2, block3, block4, block5;
var block6, block7, block8;
var block9;
var ground;
var slingshot;
var stand1, stand2;
var polygon; 

function setup (){
    createCanvas (900,400);
    console.log();

    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,590,1200,20);
    stand1 = new Stand(400,300,250,15);
    stand2 = new Stand(700,200,250,15);
    polygon = new Polygon(300,300,50,50);
    
  box = new Box(330,275,30,40);
  box2 = new Box(360,275,30,40);
  box3 = new Box(390,275,30,40);
  box4 = new Box(420,275,30,40);
  box5 = new Box(450,275,30,40);
  box6 = new Box(480,275,30,40);

  box7 = new Box(360,235,30,40);
  box8 = new Box(390,235,30,40);
  box9 = new Box(420,235,30,40);
  box10 = new Box(450,235,30,40);

  box11 = new Box(380,195,30,40);
  box12 = new Box(410,195,30,40);
  box13 = new Box(440,195,30,40);

  box14 = new Box(410,155,30,40);

// for stand2
//levek one
  block1 = new Box(640,175,30,40);
  block2 = new Box(670,175,30,40);
  block3 = new Box(700,175,30,40);
  block4 = new Box(730,175,30,40);
  block5 = new Box(760,175,30,40);
  //level two
  block6 = new Box(670,135,30,40);
  block7 = new Box(700,135,30,40);
  block8 = new Box(730,135,30,40);
  //top
  block9 = new Box(700,95,30,40);

  

 
    slingshot =  new SlingShot(polygon.body,{x :100, y:100});
}

function draw(){
    background("black");

    Engine.update(engine);
    ground.display();
    box.display();
    box2.display();
    box3.display();
     box4.display();
     box5.display();
     box6.display();
     fill ("yellow");
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     fill ("orange");
     box11.display();
     box12.display();
     box13.display();
     fill ("purple");
     box14.display();
     fill ("red");

     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     fill("violet");
     block6.display();
     block7.display();
     block8.display();
     fill ("yellow");
     block9.display();
     fill ("orange");
     
    slingshot.display();
    stand1.display();
    stand2.display();
    polygon.display();
}


function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        //dragSound.play();
    //}
}

function mouseReleased(){
    slingshot.fly();
}
