function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for (var i = 10; i <= 200; i = i + 5) {
    circle( 200, 200, i);
    noFill()
  }
}
