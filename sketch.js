var backImage,background;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var  survialTime;
var ground;
function preload(){
  
 backImage=loadImage("jungale.png") ;
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
  score = 0;
}



function setup() {
  createCanvas(400,400);


  
  
  
  monkey = createSprite(80,315,20,20);
  monkey.scale = 0.1;
  monkey.addAnimation("monkey", monkey_running);
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground .x=ground.width/2;
  console.log(ground.y)
   monkey.collide(ground);
  
 

  
 FoodGroup = createGroup();
obstacleGroup = createGroup();

  
  
  
   score = 0;
  survialTime = 0;
  
  
}

function draw() {
   background(225);
  
 
    if (ground.x < 0){
      ground.x = ground.width/2;
    }

      if(keyDown("space")) {
        monkey.velocityY = -12;
    }    
    if (FoodGroup.isTouching(monkey)) {
    FoodGroup.destroyEach();
    score = score + 2;
    
      
  }
  
      monkey.velocityY = monkey.velocityY + 0.8;
 
  
  
      
         

         
     
     
  {
   switch (score) {
    case 10:
      monkey.scale = 0.12;
      break;
    case 20:
      monkey.scale = 0.14;
      break;
    case 30:
      monkey.scale = 0.16;
      break;
    case 40:
      monkey.scale = 0.18;
      break;
    
    default:break;
   }
  }

  
  stroke("black");
  
  
    fill("black");
      textSize(20);
  text("Score:"+  score, 500, 50);
    text("Survial Time:"+  survialTime, 100, 50);
    survialTime = Math.ceil(frameCount/frameRate());
     
  
stroke("black");
  textSize(22);
  fill("black");
  text("Score : " + score, 300, 80)

  
 
    
    
  
  
  
  
  
  food();
  obstacles();
   monkey.collide(ground);

  
  
  
  
  
  drawSprites();
  function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
     monkey.depth=banana.depth
     monkey.depth+=1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}
}
function obstacles() {
  if (frameCount % 300 === 0){
    obstacle = createSprite(250,325,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.1 ;
     obstacleGroup.add(obstacle);
    monkey.depth=obstacle.depth
    monkey.depth+=1;
  }
}




