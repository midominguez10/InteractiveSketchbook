function setup() {
    createCanvas (600, 400);
  
}
function draw() {
      background (100);

      circle (300, 200, 300);
        
        arc (250, 160, 70, 50, 0, PI);
        arc (350, 160, 70, 50, 0, PI);
        arc (300, 250, 120, 100, 0, PI);
        triangle (270, 230, 330, 230, 300, 200);

    //direct manipulation

    //ellipse (mouseX, mouseY, 60, 60);

    //Constraint 

    let x = constrain (mouseX, 0, width - 50);
    let y = constrain (mouseY, 0, 150 );

   rect (x, y, 50, 50);
   fill ('red');
}