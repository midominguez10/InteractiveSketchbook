let steps=0;
let maxSteps=3;

function setup() {
    createCanvas (600, 400);
  
}
function draw() {
      background (100);

      circle (300, 200, 300);
     
      circle (250, 170, 70);
        circle (350, 170, 70,);
        circle (250, 170, 30);
        circle (350, 170, 30);
       
    ellipse (300, 270,150, 50);
    line (250, 270, 350, 270);
    line (280, 250, 280, 290);
    line (320, 250, 320, 290);
        

    //direct manipulation

    circle(mouseX, mouseY, 50);
    fill('blue');
   // ellipse (mouseX, mouseY, 60, 60);

    //Constraint 

   // let x = constrain (mouseX, 100, 500);

   // rect (x, 200, 50, 50);

let sectionWidth = width / maxSteps;
      
        fill("blue")
for (let i = 0; i < steps; i++) {
    rect(i * sectionWidth, 0, sectionWidth, height);
    
}


if (steps >= maxSteps) {
    textSize (16);
    fill (0);
    text("FREEZING", width -150, height -20);
    
}
else if (steps < maxSteps) {
    textSize (16);
    fill (0);
    text ("ITS GETTING COLD", width -150, height -20);
}
}

function mousePressed() {
    if (steps < maxSteps) {
        steps += 1;
    }
}