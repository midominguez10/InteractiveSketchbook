let x = 500;
let speed = 10;
let d = 50;
let moving = false;
let timer = 100;

function setup() {
    createCanvas(1000,1000)
}

function draw (){
    background (220);

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
    if (key === ' ')
        moving = true;
}

