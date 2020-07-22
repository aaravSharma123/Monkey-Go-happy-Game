//Global Variables
var bananaImage,obstacleImage,obstacleGroup,background,score,player,ground,invisibleground,player_running,obstacle
function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bananaImage = loadImage("Banana.png");
obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(600,500);
  score = 0;
 
  ground = createSprite(500,300,20,20);
  ground.addImage("jungle.png",backImage);
  ground.velocityX = -4;  
  ground.scale = 1.2;
  ground.x = ground.width/2; 
  
  player = createSprite(50,460,10,10);
  player.addAnimation("running",player_running);
  player.scale = 0.12;
  
  invisibleground = createSprite(300,490,600,10)
  invisibleground.visible = false;
  
  obstacleGroup = new Group();
  
  FoodGroup = new Group();

}


function draw(){
 
  if(ground.x<0) {
  ground.x = ground.width/2; 
  }  
 
  if(keyDown("space")){
    player.velocityY = -12;   
  }
  
  if(FoodGroup.isTouching(player)) {
   score = score + 2 
    FoodGroup.destroyEach();
  }
  switch (score){
 case 10:player.scale = 0.12
    break;
case 20:player.scale = 0.14
    break;
case 30:player.scale = 0.16
    break;
case 40:player.scale = 0.18
    break;
default: break;    
}
 if(obstacleGroup.isTouching(player)) {
  player.scale = 0.12 
}

player.velocityY = player.velocityY + 0.8; 
 
 player.collide(invisibleground)

 Food(); 
Obstacles();
  
stroke("white");
textSize(20);
fill("white")

drawSprites();
text("Score" + score, 450,50);
  score = score + Math.round (getFrameRate()/60);
}

function Obstacles() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var obstacles = createSprite(600,460,40,10);
    
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.2;
    obstacles.velocityX = -5;
    
     //assign lifetime to the variable
    obstacles.lifetime = 200;
    
   
    //add each cloud to the group
    obstacleGroup.add(obstacles);
  }


}
function Food() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var banana = createSprite(600,300,40,10);
    banana.y = Math.round(random(350,450));
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
   
    //add each cloud to the group
    FoodGroup.add(banana);
  }
  
} 
  
