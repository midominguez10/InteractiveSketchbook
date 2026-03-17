let x = 500;
let speed = 10;
let d = 75;
let moving = false;
let timer = 100;
let circleX, circleY;
let squareX, squareY;
let triangleX, triangleY;
let shapeOrder = []
let circlePenalty = 15;
let squarePenalty = 30;
let trianglePenalty = 45;
let picks = 0;
let maxPicks = 3;
let gameEnded = false;
let resultMessage ="";
let speedIncrease = 20;

function setup() {
    createCanvas(1000,1000)

    circleX = width/2-300;
    circleY = height/2-100 ;

    squareX = width/2;
    squareY = height/2-100;

    triangleX = width/2+300;
    triangleY = height/2 -100;

    shapeOrder = shuffle (["circle","square","triangle"]);
}

function draw (){
    background (220);

    fill(255,0,0);
    if (moving) {
    drawShape(shapeOrder[0], circleX, circleY, 120);
    drawShape(shapeOrder[1], squareX, squareY, 120);
    drawShape(shapeOrder[2], triangleX, triangleY, 120);
    }
    
    if (moving && !gameEnded) {
        timer -= deltaTime /1000;
    }

    fill (0);
    textSize (30);
    textAlign(LEFT,TOP);
    text ("Time left : " + ceil(timer), 20, 20);

    fill (0,255,0)
    quad(
        x, 775  - d/2,
        x + d/2, 800,
        x, 825 + d/2,
         x - d/2, 800
    );

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

if (moving) {
    fill(0);
    textSize(24)
    textAlign(CENTER);
    text("KEY:", width/2 +150, height -920);

    fill(255,0,0);
    drawShape("square", width/2 +250, height -920, 50);
    fill (0);
    textSize(18);
    text("Bus", width/2 +250, height - 865);

fill(255,0,0);
    drawShape("circle", width/2 +350, height -920, 50);
    fill (0);
    textSize(18);
    text("Car", width/2 +350, height - 865);

fill(255,0,0);
    drawShape("triangle", width/2 + 450, height -920,50);
    fill (0);
    textSize(18);
    text("Bike", width/2 + 450, height - 865);
}

if (moving) {
    fill (0);
    textSize (20);
    textAlign(CENTER);
    text("Press SPACE bar when the green diamond lines up with the shape above.", width/2,930);
    text("Each shape takes a certain amount of time off of the timer, so choose wisely.", width/2,960);
}

if (gameEnded) {
    fill(0);
    textSize(40);
    textAlign(CENTER, CENTER);
    text(resultMessage, width/2, height/2 +200);
}
} 

function keyPressed () {
    if (key === ' ' && !gameEnded) {
        if (!moving) {
            moving = true;
            return;
    }
    
    let index = -1;

    if (abs(x - circleX) < 40){
        index = 0;
    }
    if (abs(x-squareX) < 40){
        index = 1;
    }
    if (abs(x - triangleX) < 40){
        index = 2;
    }

    if(index !== -1) {
    let shape = shapeOrder [index];

    if (shape === "circle"){
        timer -= circlePenalty;
    }
    else if (shape === "square"){
        timer -= squarePenalty;
    }
    else if (shape === "triangle"){
        timer -= trianglePenalty;
    }

    picks++;

if (speed >0) {
    speed += speedIncrease;
}else { 
    speed -= speedIncrease;
}

    if (picks >= maxPicks) {
        gameEnded = true;
        moving = false;

        if (timer > 0) {
            resultMessage = "You made it to class on time! :)";
        } else {
            resultMessage = "You made it late to class, you get points off for the day. :(";
        }
    }else {
        shapeOrder = shuffle (["circle", "square", "triangle"]);
    }
        }
    }
}
    
function drawShape(type, shapeX, shapeY, size) {
    if (type === "circle"){
        ellipse(shapeX,shapeY,size,size);
    }
    if (type === "square"){
        rect (shapeX-40, shapeY-size/2,size,size);
        
    }
    if (type==="triangle"){
        triangle(
            shapeX, shapeY-size/2,
            shapeX-40, shapeY+size/2,
            shapeX+40, shapeY+size/2
        )
    }
}

