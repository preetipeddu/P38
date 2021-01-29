var ground, groundImage;
var sonic, sonicImage;
var obstacle, obstacleImage, obstacleGroup;
var gameState = "PLAY";


function preload(){
  
  groundImage = 
    loadImage("background.png");
  
  sonicImage = 
    loadImage("sonicRunning.png");
  
  obstacleImage = 
    loadImage("spikes.png");
  
}


function setup() {
  createCanvas(displayWidth,displayHeight);

  ground = createSprite(displayWidth-200,displayHeight-200,30,30);
  ground.x = ground.width/2;
  ground.velocityX = -6;
  ground.scale = 4.1;
  
  sonic = createSprite(200,400,20,20);
  sonic.addImage(sonicImage);
  sonic.scale = 0.3;
  
  obstacleGroup = new Group();
  
  
}

function draw() {
  background(220);
  if(ground.x<displayWidth-300){
    ground.x = ground.width/2;
    ground.addImage(groundImage);
  }
  
  if(keyDown("right")){
    sonic.x = sonic.x+10;
  }
  
  if(keyDown("down")){
    sonic.velocityY = 1;
  }
  
  if(keyDown("up")){
    sonic.velocityY = -1
    }
  if(sonic.y>displayHeight-70){
    sonic.velocityY = sonic.velocityY + 1;
  }

  camera.position.x = displayWidth/2;
  camera.position.y = displayHeight/2;
  
  spawnObstacles();
  drawSprites();

  
  if(gameState === "END"){
    sonic.destroy();
    obstacleGroup.destroyEach();
    background("white");
    textSize(20);
    stroke("purple");
    text("Game Over.", displayWidth-250,displayHeight-200);
  }
  
  
  
  if(sonic.isTouching(obstacleGroup)){
    gameState = "END";
  
  }
  }


function spawnObstacles() {
  if(frameCount%50==0){
    obstacle = createSprite(500,Math.round(random(100,600)), 20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    sonic.depth = obstacle.depth;
    sonic.depth = obstacle.depth+1;
    obstacle.scale = 0.5;
    obstacleGroup.lifetime = 400;
    obstacleGroup.add(obstacle);
    
      
    }
  
  
}
  