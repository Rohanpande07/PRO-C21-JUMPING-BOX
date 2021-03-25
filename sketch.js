var movingBox, blueBox, orangeBox, purpleBox, greenBox;
var canvas;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    movingBox = createSprite(random(20,650),15,25,25);
    movingBox.shapeColor = "white";
    movingBox.velocityX = 4;
    movingBox.velocityY = 5;

    blueBox = createSprite(75,590,150,20);
    blueBox.shapeColor = "blue";

    orangeBox = createSprite(280,590,170,20);
    orangeBox.shapeColor = "orange";

    purpleBox = createSprite(500,590,170,20);
    purpleBox.shapeColor = "purple";

    greenBox = createSprite(715,590,170,20);
    greenBox.shapeColor = "green";
}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    movingBox.bounceOff(edges);

    if(blueBox.isTouching(movingBox) && movingBox.bounceOff(blueBox)) {
        movingBox.shapeColor = "blue";
    }
    
    if(orangeBox.isTouching(movingBox) && movingBox.bounceOff(orangeBox)) {
        movingBox.shapeColor = "orange";
        movingBox.velocityX = 0;
        movingBox.velocityY = 0;
    }
    
    if(purpleBox.isTouching(movingBox) && movingBox.bounceOff(purpleBox)) {
        movingBox.shapeColor = "purple";
    }

    if(greenBox.isTouching(movingBox) && movingBox.bounceOff(greenBox)) {
        movingBox.shapeColor = "green";
    }

    drawSprites();
}
