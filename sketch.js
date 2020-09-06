
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(200,450)

	

	ground = new Ground(800,670)

	dustbin = new Dustbin(1200,650)

	Engine.run(engine);

}

function draw() {
	rectMode(CENTER)
	background("white")
	
	Engine.update(engine);
	
	paperObject.display(); 
	dustbin.display();
	ground.display();

	ground.debug = true
}
	

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:350 , y:-350});
	   
	   
	 }
   }


 
	


