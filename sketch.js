var path;
var pathImg;
var surfers;
var surfersAnimation;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  surfersAnimation = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","Jake5.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,400,400);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
  surfers = createSprite(200,300,20,20);
  surfers.addAnimation("running",surfersAnimation);
  surfers.scale=0.8;
  boundary1 = createSprite(50,200,10,400);
  boundary1.visible = false;
  boundary2 = createSprite(360,200,10,400);
  boundary2.visible = false;
}

function draw() {
  background(0);
  drawSprites();
  if(path.y > 400 ){
    path.y = height/2;
  }
  surfers.collide(boundary1);
  surfers.collide(boundary2);
  surfers.x=World.mouseX;

}
