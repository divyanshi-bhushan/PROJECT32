
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObj;
var apple1,apple2,apple3,apple4,apple5;
var score = 0;

var world,girl;

function preload(){
	girl=loadImage("girl.jpg");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;




	groundObject=new ground(width/2,600,width,20);
	treeObj=new tree(1050,590);
	apple1=new Apple(1009,100,30);
	apple2=new Apple(1130,200,30);
	apple3=new Apple(1000,250,30);
	apple4=new Apple(900,200,30);
	apple5=new Apple(1100,120,30);

	stoneObj=new Stone(300,400,30);
	launcherObj=new Throw(stoneObj.body,{x:260,y:380});





	
	Engine.run(engine);

}

function draw() {

  background(128,222,234);

  text("Press space to throw again",250,50);

  //Add code for displaying text here!

  textSize(25)
  fill("black")
  text("Score  :" + score, 100, 50)

  image(girl ,100,300,200,300);
  

  treeObj.display();
  groundObject.display();
  stoneObj.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();

  detectCollision(stoneObj,apple1);
  detectCollision(stoneObj,apple2);
  detectCollision(stoneObj,apple3);
  detectCollision(stoneObj,apple4);
  detectCollision(stoneObj,apple5);

  




  
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcherObj.fly();
}

function detectCollision(stonebody,applebody){
	stonepos=stonebody.body.position;
	applepos=applebody.body.position;
	var distance=dist(stonepos.x,stonepos.y,applepos.x,applepos.y);
	if(distance<=applebody.r+stonebody.r){
		Matter.Body.setStatic(applebody.body,false);
		score++;
	
	}
}






function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:225,y:400});
		launcherObj.Launch(stoneObj.body);
	}
}
	







