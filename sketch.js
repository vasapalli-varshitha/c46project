
var player,playerImg;
var alien,alienImg;
var bullet,bulletImg;
var gameState="serve";
var bulletGroup,alienGroup;
var score=0;



function preload(){
  bg= loadImage("sky.png");
  playerImg= loadImage("rocket.png");
  alienImg = loadImage("alien.png");
  alien2Img = loadImage("alien2.png");
  alien3Img = loadImage("alien3.png");
  bulletImg=loadImage("bullet.png");
}

function setup() {
  createCanvas(400, 500);
  bulletGroup=new Group();
  alienGroup=new Group();
  alien2Group=new Group();
  alien3Group=new Group();
  player=createSprite(200,440,30,30);
  player.addImage(playerImg);
  player.scale=0.2;
}


function draw() {
  background(bg);

  text("SCORE:"+score,30,19)
  
    
    if(keyDown("LEFT_ARROW")){
      player.x = player.x -3;
    }
    
   if(keyDown("RIGHT_ARROW")){
     player.x = player.x +3;
   }

   if(gameState==="serve"){
       textSize(20);
       text("press DOWN ARROW to start",55,250);

       
       
      if(keyDown("DOWN_ARROW")){
        gameState="play";
      }
    }

    if( gameState==="play"){
         if(keyDown("UP_ARROW")){
          spawnBullet()
         }
         if(frameCount%250===0){
          alienA()
         }
 
         if(frameCount%300===0){
           alienB();  
         }

         if(frameCount%350===0){
           alienC();  
         }

         if(bulletGroup.isTouching(alienGroup)){
          alienGroup.destroyEach();
          bulletGroup.destroyEach();
          score=score+1;
         }
         if(bulletGroup.isTouching(alien2Group)){
           alien2Group.destroyEach();
           bulletGroup.destroyEach();
           score=score+2;
         }
         if(bulletGroup.isTouching(alien3Group)){
           alien3Group.destroyEach();
           bulletGroup.destroyEach();
           score=score+5;
         }
    }

     if(gameState==="end"){
        textSize(20);
        text("GAMEOVER",150,250);
        text("PRESS R TO RESET THE GAME",70,300);
      }
      if(keyDown("R")){
        gameState="serve";
        score=0;
      }
    
      if(alienGroup.isTouching(player)){
          player.destroy();
          alienGroup.destroyEach();
          alien2Group.destroyEach();
          alien3Group.destroyEach();
          bulletGroup.destroyEach();
          gameState="end";
         
        }

        if(alien2Group.isTouching(player)){
          player.destroy();
          alienGroup.destroyEach();
          alien2Group.destroyEach();
          alien3Group.destroyEach();
          bulletGroup.destroyEach();
          gameState="end";
         
        }

        if(alien3Group.isTouching(player)){
          player.destroy();
          alienGroup.destroyEach();
          alien2Group.destroyEach();
          alien3Group.destroyEach();
          bulletGroup.destroyEach();
          gameState="end";
         
        }
   
    drawSprites();
       
}

function spawnBullet(){
  bullet=createSprite(player.x,player.y,10,10);
  bullet.addImage(bulletImg);
  bullet.scale=0.05;
  bullet.velocityY=-5;
  bulletGroup.add(bullet);
}


function alienA() {
  alien=createSprite(Math.round(random(20,380)),40,30,30);
  alien.addImage(alienImg);
  alien.scale=0.2;
  alien.velocityY=2;
  alienGroup.add(alien);
}

function alienB(){
  alien2=createSprite(Math.round(random(20,380)),40,30,30);
  alien2.addImage(alien2Img);
  alien2.scale=0.2;
  alien2.velocityY=2;
  alien2Group.add(alien2);
}

function alienC(){
  alien3=createSprite(Math.round(random(20,380)),40,30,30);
  alien3.addImage(alien3Img);
  alien3.scale=0.4;
  alien3.velocityY=2;
  alien3Group.add(alien3);
}