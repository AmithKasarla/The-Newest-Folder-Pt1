var BG, BGI

function preload(){
BGI = loadImage("Images/Background.jpg")
}

function setup(){
createCanvas(700, 380)
BG = createSprite(350, 190)
BG.scale = 0.7
BG.addImage(BGI)
BG.velocityX = -2.5
}

function draw(){
background(0)
if(BG.x < 140){
  BG.x = 350
}

drawSprites()
}