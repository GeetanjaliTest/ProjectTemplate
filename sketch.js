var ground, groundImg;
var appleImg, bananaImg, pearImg, orangeImg;
var strawberryVendImg, halloweenImg;
var star, starImg;
var bee, beeImg;
var score=0;
var gameState="play";
var distance =0;


function preload(){
  

}

function setup() {
 createCanvas(windowWidth, windowHeight);
  
 
ground = createSprite(width/2,height-100,width,500);
 
  
  bee = createSprite(50,height-50,20,50);

  
  invisibleGround = createSprite(width/2,height-50,width,125);
  invisibleGround.visible = false;
  
  edges= createEdgeSprites();
  
  halloweenG= new Group();
  strawberryG= new Group();
  fruitsG= new Group();
  starG= new Group();
  
  
}

function draw() {
   background("lightblue");
  
   textSize(25);
   text("score:"+score,30,50);

  
  if(gameState==="play"){
  



    drawSprites();
  }


}

function spawnFruits(){

}


function createStrawberryVendor(){

}

function createObstacles(){

}
