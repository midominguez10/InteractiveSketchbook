function setup() {
    createCanvas (600, 400);
   background (100);
}
function draw() {
     

      circle (300, 200, 300);
      ellipse (250, 170, 70, 30);
      ellipse (350, 170, 70, 30);
      circle (250, 170, 30);
        circle (350, 170, 30,);
        line (250, 250, 350, 250);
        arc (250, 190, 70, 50, 0, PI);
        arc (350, 190, 70, 50, 0, PI);

    //direct manipulation

    ellipse (mouseX, mouseY, 60, 60);

    //Constraint 

   // let x = constrain (mouseX, 100, 500);

   // rect (x, 200, 50, 50);
}