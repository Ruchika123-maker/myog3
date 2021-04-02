const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bgImg, bg;
var bird, birdimg; 
var pIMG1, pIMG2, pillar1, pillar2;
var pillarsGroup1;

function preload(){

  bgImg = loadImage("images/bg.jpg")
  birdimg = loadImage("images/bird.png");
  pIMG1 = loadImage("images/pillar.png");
  pIMG2 = loadImage("images/pillar2.png");
}

function setup() {
  createCanvas(1500,750);
  engine = Engine.create();
	world = engine.world;

  bg = createSprite(0,0,2000,1000);
  bg.addImage(bgImg);
  bg.scale = 8;

  bird = createSprite(200,300,100,50);
  bird.addImage(birdimg);
  bird.scale =0.5;

  pillarsGroup1 = new Group();
  pillarsGroup2 = new Group();
}

function draw() {

  bg.velocityX = -6;

  if (bg.x < 0){
    bg.x = bg.width/2;
  }

  if(keyDown("space")) {
    bird.velocityY = -12;
  }

  bird.velocityY =  bird.velocityY + 0.8;

  spawnPillars();
  drawSprites();
}


function spawnPillars(){

  if (frameCount % 60 === 0) {
    var pillar1 = createSprite(800,100,50,600);
    pillar1.y = Math.round(random(1,50));
    pillar1.addImage(pIMG1);
    pillar1.scale = 1;
    pillar1.velocityX = -5;
    pillar1.lifetime = 400;
    pillarsGroup1.add(pillar1);
  }

  if (frameCount % 60 === 0) {
    var pillar2 = createSprite(800,700);
    pillar2.y = Math.round(random(600,800));
    pillar2.addImage(pIMG2);
    pillar2.scale = 1;
    pillar2.velocityX = -5;
    pillar2.lifetime = 400;
    pillarsGroup2.add(pillar2);
  }
}