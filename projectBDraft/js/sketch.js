function setup() {
  let canvas = createCanvas(450, 530);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  fill("#c68642");
  rect(0, 0, 600); // background
  noStroke();

  fill(" #6E260E");
  rect(0, 30, 600, 55);

  fill(" #6E260E");
  rect(0, 100, 600, 55);

  fill(" #6E260E");
  rect(0, 170, 600, 55);

  fill(" #6E260E");
  rect(0, 240, 600, 55);

  fill(" #6E260E");
  rect(0, 310, 600, 55);

  fill(" #6E260E");
  rect(0, 380, 600, 55);

  fill(" #6E260E");
  rect(0, 450, 600, 55);

  fill(" #6E260E");
  rect(-30, 0, 55, 600);

  fill(" #6E260E");
  rect(50, 0, 55, 600);

  fill(" #6E260E");
  rect(140, 0, 55, 600);

  fill(" #6E260E");
  rect(220, 0, 55, 600);

  fill(" #6E260E");
  rect(300, 0, 55, 600);

  fill(" #6E260E");
  rect(370, 0, 55, 600);

  fill("#ffdbac");
  circle(300, 300, 150); // face shape
  noStroke();

  fill("#ffffff");
  ellipse(270, 290, 30, 20); // eye

  fill("#ffffff");
  ellipse(320, 290, 30, 20); // eye

  fill("#000000");
  ellipse(320, 290, 15, 15);

  fill("#000000");
  ellipse(270, 290, 15, 15);

  fill("#eeeeee");
  ellipse(320, 290, 2, 2);

  fill("#eeeeee");
  ellipse(270, 290, 2, 2);

  fill("#000000");
  ellipse(297, 330, 20, 20); // eye

  fill("#ffdbac");
  rect(280, 360, 35, 35);

  fill("#2E8B57");
  rect(230, 390, 150, 150, 30, 30);

  fill("#e0ac69");
  circle(295, 305, 10); // nose

  fill("#000000");
  circle(310, 220, 70);
  fill("#000000");
  circle(290, 220, 70);
  fill("#000000");
  circle(260, 220, 70);
  fill("#000000");
  circle(230, 240, 70);
  fill("#000000");
  circle(220, 270, 70);
  fill("#000000");
  circle(220, 310, 70);
  fill("#000000");
  circle(220, 350, 70);
  fill("#000000");
  circle(360, 240, 70);
  fill("#000000");
  circle(390, 270, 70);
  fill("#000000");
  circle(390, 300, 70);
  fill("#000000");
  circle(390, 340, 70);
  fill("#000000");

  fill("#eeeeee");
  ellipse(200, 450, 150, 170);
  fill("#eeeeee");
  ellipse(200, 330, 100, 100);

  fill("#000000");
  ellipse(180, 320, 30, 30); // eye

  fill("#000000");
  ellipse(220, 320, 30, 30);

  fill("#eeeeee");
  ellipse(180, 320, 20, 20); // eye

  fill("#eeeeee");
  ellipse(220, 320, 20, 20);

  fill("#000000");
  ellipse(180, 320, 15, 15); // eye

  fill("#000000");
  ellipse(220, 320, 15, 15);

  arc(200, 350, 20, 20, 0, PI + QUARTER_PI, CHORD);

  fill("#000000");
  ellipse(260, 450, 50, 130);

  fill("#000000");
  ellipse(150, 450, 50, 130);

  fill("#FFA500");
  circle(220, 520, 25);
  fill("#FFA500");
  circle(190, 520, 25);
}
