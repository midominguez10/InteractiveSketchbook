let x = 500;
let speed = 10;
let d = 75;
let moving = false;
let timer = 100;

let circleX, circleY;
let squareX, squareY;
let triangleX, triangleY;
let shapeOrder = []

let circlePenalty = 10;
let squarePenalty = 20;
let trianglePenalty = 30;

function setup() {
    createCanvas(1000,1000)

    circleX = width/2-300;
    circleY = height/3;

    squareX = width/2;
    squareY = height/3;

    triangleX = width/2+300;
    triangleY = height/3;

    shapeOrder = shuffle (["circle","square","triangle"]);
}

function draw (){
    background (220);

    fill(255,0,0);
    if (moving) {
    drawShape(shapeOrder[0], circleX, circleY);
    drawShape(shapeOrder[1], squareX, squareY);
    drawShape(shapeOrder[2], triangleX, triangleY);
    }
    
    if (moving && timer > 0) {
        timer -= 1/60;
    }

    fill (0);
    textSize (30);
    textAlign(LEFT,TOP);
    text ("Time left: " + ceil(timer), 20, 20);

    fill (0,255,0)
    ellipse (x,800,d,d);
    if (moving) {
        x = x + speed;
        if (x > width - d/2 || x < d/2) {
            speed *= -1;
        }   
    }
    
    if (!moving) {
        fill (255);
        rect (width/2 - 150, height -120, 300, 60);
        fill (0);
        textSize(20);
        textAlign(CENTER,CENTER);
        text ("PRESS SPACE TO START", width/2, height -90);
    }
} 

function keyPressed () {
    if (key === ' ') {
        moving = true;
        let index;

    if (abs(x - circleX) < 40){
        index = 0;
    }
    if (abs(x-squareX) < 40){
        index = 1;
    }
    if (abs(x - triangleX) < 40){
        index = 2;
    }

    let shape = shapeOrder [index];

    if (shape === "circle"){
        timer -= circlePenalty
    }
    if (shape === "square"){
        timer -= squarePenalty
    }
    if (shape === "triangle"){
        timer -= trianglePenalty;
    }
    }
}

function drawShape(type, shapeX, shapeY) {
    if (type === "circle"){
        ellipse(shapeX,shapeY,80,80);
    }
    if (type === "square"){
        rect (shapeX-40, shapeY-40,80,80);
        
    }
    if (type==="triangle"){
        triangle(
            shapeX, shapeY-40,
            shapeX-40, shapeY+40,
            shapeX+40, shapeY+40
        );
       
    }
}

