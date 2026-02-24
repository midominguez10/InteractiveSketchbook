let steps=0;
let maxSteps=1;

function setup() {
    createCanvas (600, 400);
  
}
function draw() {
      background (100);
        square (100,100, 100)


let sectionWidth = width / maxSteps;
      
for (let i = 0; i < steps; i++) {
    
    
}


if (steps >= maxSteps) {
    textSize (16);
    fill (0);
    text("IM GOING TO MAKE IT ON TIME", width -250, height -50);
    
}
else if (steps < maxSteps) {
    textSize (16);
    fill (0);
    text ("IM GOING TO BE LATE", width  -200, height -50);
    square (250,250,100)
    square (100, 250, 100)
    square (250, 100, 100)
    }


}


function mousePressed() {
    if (steps < maxSteps) {
        steps += 1;
    }
}