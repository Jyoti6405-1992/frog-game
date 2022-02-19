var oceanImg, ocean;
var coinImg, coin, coinGroup;
var climberImg, climber, climbersGroup;
var frog, frogImg;
var gameState = "play"
var score = 0;
var PLAY = 1;
var END = 0;

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
  ocean.velocityY = -5;
  frog = createSprite(200,200,50,50);
  frog.scale = 0.1;
  frog.addImage("frog", frogImg);  
  frog.velocityY = -2;
  
  //create coin group and climber group
  coinGroup = new Group();
  climbersGroup = new Group();
}

function draw(){
  background(0);
  drawSprites();
  textSize(20);
  text("SCORE " + score, 450,30);
  
  if (gameState === "play") {
      if(ocean.y < 300)
      {
          ocean.y = 300;
          ocean.x = 300;
      }
      if(frog.y < 300 && keyDown("space"))
      {
          frog.y = frog.y + 3;
      }
      if(frog.isTouching(coinGroup))
      {
        score=score+1;
        //gameState = "play";
      }
     
      if(keyDown('left'))
      {
        frog.x= frog.x - 5;
      }
      if(keyDown('right'))
      {
        frog.x= frog.x + 5;
      }
      if(keyDown('down'))
      {
        frog.y = frog.y + 5;
      }
      if(keyDown('up'))
      {
        frog.y = frog.y - 3;
      }
    
    
  }
  spawnCoin();
  
  if (gameState === "end"){
    gameState = 0;

  }
  
}

// create the coin and climber in the same function
function spawnCoin() {
  
  if (frameCount % 180 === 0) {
    //make the x position of the coin and climber the same
    coin = createSprite(Math.round(random(10,500)),Math.round(random(10,440)),50,50);
        coin.addImage("coin",coinImg);
        coin.setVelocity(0,-2)
        coin.scale = 0.1;
        coin.lifetime = 160;
       coinGroup.add(coin);
        climber = createSprite(coin.x,coin.y+35,50,50);
        climber.addImage("climber",climberImg);
        climber.scale=0.3;
        climber.lifetime=160;
        climber.setVelocity(0,-2)
       climbersGroup.add(climber);
   
  }
}

