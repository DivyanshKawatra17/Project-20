var mouse, mouseImage1, mouseImage2; mouseImage3
var cat, catImage1, catImage2; catImage3
var canvas, bg









function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    mouseImage1 = loadAnimation("images/mouse1.png")
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3 = loadAnimation("images/mouse4.png")
    catImage1 = loadAnimation("images/cat1.png")
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImage3 = loadAnimation("images/cat4.png")
}

function setup(){
   canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(200,700)
    mouse.addAnimation("mouseSleeping",mouseImage1)
    mouse.scale = 0.2

    cat = createSprite(800,700)
    cat.addAnimation("catSleeping",catImage1)
    cat.scale = 0.2
}

function draw() {

    background(bg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImage3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImage3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }  


    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
   if(keyDown("left")){
      cat.velocityX = -5
      cat.addAnimation("catrunning",catImage2)
      cat.changeAnimation("catrunning")
      mouse.addAnimation("mouserunning",mouseImage2)
      mouse.changeAnimation("mouserunning")
   }
  //For moving and changing animation write code here


}
