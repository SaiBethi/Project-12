var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.X=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(apple.png);
  apple.velocityY= -4;
}

function createLeaves() {
  leaves = createSprite(random(50,350),40, 10, 10);
  leaves.addImage(leaf.png);
  leaf.velocityY= -4;
}


var createApples =  Math.round(random(1,2));
if (frameCount % 80 == 0) {
if (createApples == 1) {
createApples()
  }
  else {
    createLeaves()
  }
}