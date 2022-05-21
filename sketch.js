var bg
var balloonAnimation
var towers
var birds
var balloon;
var building
var lamp


function preload()
{
bg=loadImage("assets/bg.png")

balloonAnimation=loadAnimation("assets/balloon1.png", "assets/balloon2.png","assets/balloon3.png")
obstacleBottomImage1=loadImage("/assets/obsBottom1.png")
obstacleBottomImage2=loadImage("/assets/obsBottom2.png")
obstacleBottomImage3=loadImage("/assets/obsBottom3.png")
obstaclesTopImage=loadImage("/assets/obsTop2.png")

}

function setup()
{
  createCanvas(600,600)
balloon=createSprite(100,200,30,30)

balloon.addAnimation("balloonMoving",balloonAnimation)
balloon.scale=0.4
 
}

function draw()
{
background(bg)
drawSprites();
if(keyIsDown(UP_ARROW)){
balloon.velocityY=-8
}

balloon.velocityY=balloon.velocityY+0.5
spawnBottomObstacles();
spawnTopObstacles();
}



function spawnBottomObstacles(){
  if(frameCount%60==0){
randomNumber=Math.round(random(1,4))
  var obstaclesBottom=createSprite(650,510,10,10)
  obstaclesBottom.velocityX=-5
  obstaclesBottom.scale=0.1
switch (randomNumber) {
  
  case 1: obstaclesBottom.addImage(obstacleBottomImage1)
    break;
    case 2: obstaclesBottom.addImage(obstacleBottomImage2)
    break ;
    case 3: obstaclesBottom.addImage(obstacleBottomImage3)
    break;

  
}
}



}
function spawnTopObstacles(){
if(frameCount%60==0){
 var randomYPosition=Math.round(random(25,80))
var obstaclesTop=createSprite(650,randomYPosition,15,15)
obstaclesTop.velocityX=-5
obstaclesTop.scale=0.1
obstaclesTop.addImage(obstaclesTopImage)








}


}