var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1,side2,side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	

	
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	
	//packageBody.collide(side2);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	side1 = new Side(250,607,20,100);
	side2 = new Side(340,647,200,20);
	side3 = new Side(430,607,20,100);
	 
	 //World.add(world,side1);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,10);
  ellipseMode(RADIUS);
  ellipse(packageBody.position.x,packageBody.position.y,5,5);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  side1.display();
  side3.display();
  side2.display();
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false);
  }
}