var ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
if(keyDown("left")){
  ball.velocityX=-2
  ball.velocityY=0
}
if(keyDown("right")){
  ball.velocityX=2
  ball.velocityY=0
}
drawSprites()
}




