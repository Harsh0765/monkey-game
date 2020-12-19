var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var obstacle;
var jungle;
var go;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obsImage = loadImage("obstacle.png");
  junglei = loadImage("jungle.webp");
  go1 = loadImage("hks.png");
  
  
 
}



function setup() {
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1;
  
 ground = createSprite(400,350,900,10);
 ground.velocityX = -4;
 ground.x = ground.width/2
  obsGroup = new Group();
  banoGroup = new Group();
  

  
}


function draw() {
background("white");
  banana();
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  obs();
  if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  if(monkey.isTouching(obsGroup)){
    gameover();
  }
  text("score:"+score,300,100);
  if(monkey.isTouching(banoGroup)){
    score = score+1;
  }
  
  
drawSprites();
}



function obs(){
  if(frameCount%100 === 0){
  var obstacle = createSprite(700,330,10,10);
  obstacle.velocityX = -3;
    obsGroup.add(obstacle);
    obstacle.addImage(obsImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 220;
    
    
    
    
    
    
    
      
         
      
    }
  
  
  
  
    
  
  
}








function banana(){
  if(frameCount%100 === 0){
  var bano = createSprite(700,110,10,10);
  bano.velocityX = -3;
    banoGroup.add(bano);
    bano.addImage(bananaImage);
    bano.scale = 0.2;
    bano.lifetime = 200;
    
    
    
    
      
         
      
    }




}

function gameover(){
  gameover1 = createSprite(210,210,10,10);
  gameover1.addImage(go1);  
  monkey.destroy();
}






























