var opencard, opencardImg;
var playButton, playButtonImg;
var doraRun, doraRunImg;

var l1, l1Img;
var l2, l2Img;
var l3, l3Img;

var fort, fortImg;
var nail, nailImg;
var invisibleGround;

var score = 0;

var play = 0;

function preload() {
    opencardImg   = loadImage("sprites/Openind Card.png");
    playButtonImg = loadImage("sprites/Play button.png");

    l1Img         = loadImage("sprites/L1.png");
    l2Img         = loadImage("sprites/L2.png");
    l3Img         = loadImage("sprites/L3.png");

    fortImg       = loadImage("sprites/Fort.png");
    doraRunImg    = loadImage("sprites/Dora Run.png");
    nailImg       = loadImage("sprites/Nails.png");
}

function setup () {

    createCanvas(windowWidth, windowHeight);

    openCard = createSprite(windowWidth/2, windowHeight/2);
    openCard.addImage("card", opencardImg);
    openCard.scale = 1.4;

    playButton = createSprite(710, 590, 100, 100);
    playButton.addImage("play", playButtonImg);
    playButton.scale = 0.06;

    l1 = createSprite(400, 590, 100, 100);
    l1.addImage("l1", l1Img);
    l1.scale = 0.7;
    l1.visible = false;

    l2 = createSprite(700, 590, 100, 100);
    l2.addImage("l2", l2Img);
    l2.scale = 0.7;
    l2.visible = false;

    l3 = createSprite(1000, 590, 100, 100);
    l3.addImage("l3", l3Img);
    l3.scale = 0.7;
    l3.visible = false;

    fort = createSprite(800, windowHeight/2, 100, 100);
    fort.addImage("fort", fortImg);
    
    fort.scale = 2.3;
    fort.visible = false;
    fort.velocityX = -1.2;

    doraRun = createSprite(200, 500, 400, 400);
    doraRun.addImage("doraRun", doraRunImg);
    doraRun.visible = false;

    invisibleGround = createSprite(width/2, height-20, width, 20);
    invisibleGround.visible = false;

}

function draw () {
    
    background("black");

    if(play == 0){
        if(mousePressedOver(playButton)){
            playButton.visible = false;
            l1.visible         = true;
            l2.visible         = true;
            l3.visible         = true;
        }
    
        if(mousePressedOver(l1)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            fort.visible     = true;
            doraRun.visible  = true;

            play = 1;
        }
    }

 

    drawSprites();   

    if(play == 1){
        if(fort.x < 650) {
            fort.x = 700;
         }

         obstacle();

         textSize(35);
         stroke("yellow");
         fill("#ff006e");
         text("SCORE : " + score, 50, 650);

         if(keyDown("space")) {
             doraRun.velocityY = -12;
         }

         doraRun.velocityY = doraRun.velocityY + 0.8;

         doraRun.collide(invisibleGround);

    }
  

    }

    function obstacle () {
        if(frameCount % 70 === 0) {
            nail = createSprite(width,580,40,10);
            nail.velocityX = -9;
            nail.lifetime = 200;
            nail.addImage(nailImg);
            nail.scale = 0.1;
    }
}