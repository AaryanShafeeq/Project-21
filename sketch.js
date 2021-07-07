
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball;

let ground;
let left;
let right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	let ball_options = {
		restituition:3,
		density:1.2,
		friction:0
	}

	ball = Bodies.circle(200, 200, 20, ball_options);
	World.add(world, ball);

	ground = new Ground(400, 688, 800, 20);
	left = new Ground(550, 640, 15, 70);
	right = new Ground(750, 640, 15, 70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  left.display();
  right.display();

  ellipse(ball.position.x, ball.position.y, 20);

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0, y:0,}, {x:1, y:0});
	}
}