var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var cactus, cactus1_image, cactus2_image, cactus3_image, cactus4_image, cactus5_image, cactus6_image


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  cactus1_image = loadImage("obstacle1.png");
  cactus2_image = loadImage("obstacle2.png");
  cactus3_image = loadImage("obstacle3.png");
  cactus4_image = loadImage("obstacle4.png");
  cactus5_image = loadImage("obstacle5.png");
  cactus6_image = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(255);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  // spawn the obstacles
  spawn_obstacles ();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.55;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawn_obstacles (){
  if(frameCount % 80 === 0){
    cactus = createSprite(600, 165);
    cactus.velocityX= -4
    var randcactus= Math.round(random(1,6))
    switch(randcactus){
      case 1: cactus.addImage(cactus1_image)
      break;
      case 2: cactus.addImage(cactus2_image)
      break;
      case 3: cactus.addImage(cactus3_image)
      break;
      case 4: cactus.addImage(cactus4_image)
      break;
      case 5: cactus.addImage(cactus5_image)
      break;
      case 6: cactus.addImage(cactus6_image)
      break;
      default: break; 
    }
    cactus.scale= 0.7
  }
}
