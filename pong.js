// The ball, or puck
var puck = {
  x: 300,
  y: 200,
  vx: 1,
  vy: -2,
  size: 10,
}

// Players
var leftY = 200;
var rightY = 200;
var playerWidth = 10;
var playerHeight = 40;
var playerSpeed = 10;
var left = []
var right = []

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER)
}

function draw() {
  background(220);
  text(left.length, width / 4, 50);
  text(right.length, width / 4 * 3, 50);
  
  
  // Draw the board
  line(width/2, 0, width/2, height);

  // Draw the puck
  rectMode(CENTER);
  rect(puck.x, puck.y, puck.size, puck.size);
  
  // Draw the players
  rectMode(CORNER);
  rect(0, leftY, playerWidth, playerHeight);
  rect(width - playerWidth - 1, rightY, playerWidth, playerHeight);

  // Get user input
  if (keyIsDown(UP_ARROW)) {
    rightY -= playerSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    rightY += playerSpeed;
  }
  if (keyIsDown(65)) { // 65 is "A"
    leftY -= playerSpeed;
  }
  if (keyIsDown(90)) { // 90 is "Z"
    leftY += playerSpeed;
  }
  
  // Ensure the paddle doesn't leave the screen
  if (leftY < 0) {
    leftY = 0;
  }
  if (leftY > height - playerHeight) {
    leftY = height - playerHeight;
  }
  if (rightY < 0) {
    rightY = 0;
  }
  if (rightY > height - playerHeight) {
    rightY = height - playerHeight;
  }

  // Update the puck position
  puck.x += puck.vx;
  puck.y += puck.vy;

  // Check if puck is off the top or bottom screen
  if (puck.y < 0 || puck.y > height) {
    puck.vy *= -1;
  }
  
  // Check if puck is hitting a paddle
  if (puck.x < playerWidth && puck.y > leftY && puck.y < leftY + playerHeight) {
    puck.vx *= -1;
  }
  if (puck.x > width - playerWidth && puck.y > rightY && puck.y < rightY + playerHeight) {
    puck.vx *= -1;
  }
  if (puck.x >= width) {
		die(1);
    noLoop();
  }
  if (puck.x <= 0) {
    die(2);
    noLoop();
  }
}

function die(d) {
  
  puck = {
  x: 300,
  y: 200,
  vx: 1,
  vy: -2,
  size: 10,
  }
  
  text("[Left click] to continue", width / 2, 180);
  text("[Space] to restart", width / 2, 220);
  
  // Check if a player scored
  if (d==1) {
    text("Left player scores a point!", width / 4, 100);
    text("+1", width / 4, 65);
    left.push(1)
  }
  if (d==2) {
    text("Right player scores a point!", width / 4 * 3, 100); 
    text("+1", width / 4 * 3, 65);
    right.push(1);
  }
}

function mouseClicked() {
  loop()
}
     
function keyPressed() {
  if (keyCode === 32) {
    left = []
    right = []
    loop()
  } 
}
