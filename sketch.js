var trexAnim,trex
var groundImage,ground

function preload(){ //used to load the images and animations
  trexAnim=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png")

}

function setup(){ //used to create the canvas and sprites
  createCanvas(600,200)

  trex=createSprite(50,160,20,20)
  trex.addAnimation("trexLabel",trexAnim)
  trex.scale=0.5
  
  ground=createSprite(300,180,600,10)
  ground.addImage("groundLabel",groundImage)
 
 
}

function draw(){//used to write the working of the game.
  background("black")
  ground.velocityX=-4

  if(ground.x<0){

    ground.x=ground.width/2
  }
  if(keyDown("space")){
    trex.velocityY=-10
  }
   trex.velocityY=trex.velocityY+1.5

   trex.collide(ground)

  drawSprites()

}
