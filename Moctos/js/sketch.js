// Moctos
// Discovered by Teenagers in Amazon(Tim Zortov Scientist WATCHING THRU TIKTOK)
// No family member
// Both water and land
// Red, snake like eye, 8 long legs like octopus, snake like tongue.
// He loves bubbles and you will find bubbles all around the swamp. Moctos hates birds.
// Interact by throwing a rock at things

// let xArray = [];
// let yArray = [];
// let initialSizeOfArray = 10;
let circle2X = 270;

let cart;
let profile;
let comment;
let share;

function setup() {
  let cnv=createCanvas(800, 500);
  cnv.parent("p5-canvas-container")

  cart = loadImage("cart.jpg");
  profile = loadImage("profile.jpg");
  comment = loadImage("comment-44.png");
  share = loadImage("share.png");

  //  for(let i = 0; i < initialSizeOfArray; i++){
  //   xArray[i] = random(0, width);
  //   yArray[i] = random(0, height);
  // }
}

function draw() {
  background("beige");

  strokeWeight(20); // phone
  stroke(0);
  fill("white");
  rect(250, 20, 350, 460);

  noStroke();

  // fill("black");// phone buttons
  // rect(20, 30, 20, 20);
  fill("#3e535c"); // sky
  rect(260, 30, 330, 270);

  fill("#023020"); // mountains
  ellipse(515, 300, 150, 100);
  ellipse(450, 300, 180, 150);
  fill("#899499"); // rocks
  ellipse(350, 300, 30, 30);
  ellipse(550, 300, 40, 30);
  fill("#475c4a");
  rect(260, 300, 330, 170); // lake

  fill("#a6b96f"); // frog sitting plant
  ellipse(310, 340, 50, 30);
  ellipse(350, 380, 50, 30);
  ellipse(550, 350, 50, 30);

  fill("white"); // moon
  circle(500, 75, 60);

  fill("#D3D3D3");
  ellipse(320, 80, 40, 20); // cloud 1
  ellipse(340, 80, 40, 20);
  ellipse(330, 70, 30, 20);

  ellipse(500, 100, 40, 20); // cloud 2
  ellipse(520, 100, 40, 20);
  ellipse(510, 90, 30, 20);

  fill("green"); //grass
  strokeWeight(1);
  beginShape();
  vertex(310, 310);
  bezierVertex(310, 190, 300, 300, 310, 310);
  endShape();

  beginShape(); //grass
  vertex(310, 310);
  bezierVertex(350, 100, 320, 320, 320, 310);
  endShape();

  ellipse(550, 270, 9, 80);
  // ellipse(550, 270, 9, 80);

  fill("#7B3F00"); // on top of grass
  ellipse(330, 210, 20, 50);
  ellipse(305, 240, 15, 40);
  ellipse(550, 220, 15, 40);

  fill("#e7feff"); // bubbles
  stroke("#92eff3");
  circle(350, 200, 20);
  circle(300, 300, 20);
  circle(320, 150, 25);
  circle(420, 170, 15);
  circle(480, 260, 20);
  circle(500, 360, 15);
  circle(550, 330, 25);

  // circle(300, 210, 8);
  // circle(330, 300, 8);
  // circle(430, 160, 8);
  // circle(380, 100, 8);
  // circle(490, 270, 8);
  // circle(500, 340, 8);
  // circle(550, 140, 8);

  fill("yellow"); // beetle and when it moves color fades
  noStroke();
  let mountainRangeHeight = noise(frameCount * 0.009); // "noiseValue"
  let circle2Y = map(mountainRangeHeight, 0, 1, 0, 50);
  let mountainRangeHeightt = noise(frameCount * 0.009); // "noiseValue"
  let circle3Y = map(mountainRangeHeight, 0, 1, 0, 50);

  circle(circle2X, 100 + circle2Y, 8);
  if (circle2X > 300) {
    circle(circle2X - 30, 200 + circle3Y, 8);
  }
  circle(circle2X, 379 + circle2Y, 8);
  circle2X += 1;
  if (circle2X > 590) {
    circle2X = 270;
  }

  fill("black"); // banner background
  rect(250, 440, 340, 40);
  fill("white");
  circle(425, 465, 30);

  stroke(5); // plus nine
  strokeWeight(3);
  line(415, 465, 435, 465);
  line(425, 455, 425, 475);

  image(cart, 310, 440, 40, 50); // cart icon
  image(profile, 500, 445, 40, 40); // profile icon

  fill("black"); // profile background
  stroke("#eeeeee");
  strokeWeight(1);
  circle(560, 270, 40);
  image(comment, 545, 310, 30, 30);
  text("20M", 550, 350);
  image(share, 550, 370, 20, 20);
  noStroke();
  text("10.5M", 545, 405);

  //     saveCanvas('Phoebe', 'png');
}
``