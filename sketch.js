var oceanImg, ocean;
var coinImg, coin, coinGroup;
var climberImg, climber, climbersGroup;
var frog, frogImg;
var gameState = "play"
var score = 0;

function preload(){
  oceanImg = loadImage("water.jpg");
  coinImg = loadImage("coin.png");
  climberImg = loadImage("seaweed.png");
  frogImg = loadImage("frog.png");
  
}

function setup(){
  createCanvas(580,450);
  
  ocean = createSprite(300,300);
  ocean.addImage("ocean",oceanImg);
  
  frog = createSprite(200,200,50,50);
  frog.scale = 0.1;
  frog.addImage("frog", frogImg);  
  
  //create coin group and climber group
  
}

function draw(){
  background(0);
  drawSprites();
  
  if (gameState === "play") {
  
    
  }
  
  if (gameState === "end"){
    

  }

}

// create the coin and climber in the same function
function spawnCoin() {
  
  if (frameCount % 280 === 0) {
    //make the x position of the coin and climber the same
   
  }
}

