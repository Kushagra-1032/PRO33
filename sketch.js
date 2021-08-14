var backGroundimg;
var frost;
var frostImg;
var snowMan;
var snowManImg;



function preload(){
backGroundimg=loadImage("snow1.jpg");
frostImg=loadImage("snow4.webp");
snowManImg=loadImage("snowman.png")





}






function setup() {
  createCanvas(1400,600);
  snowMan=createSprite(600,400,50,50);
  snowMan.addImage(snowManImg);
  snowMan.scale=0.2;
 




}

function draw() {
  background(backGroundimg);
  createFrost();
  if(keyDown("right")){
    snowMan.x=snowMan.x+2



  }


  if(keyDown("left")){
    snowMan.x=snowMan.x-2;



  }









  drawSprites();









}

function createFrost(){
  if(frameCount%60==0){
 frost=createSprite(700, 50, 50, 50);
 frost.x=Math.round(random(100,1000))
 frost.velocityY=3;
 frost.addImage(frostImg);
 frost.scale=0.2;
  }






}












