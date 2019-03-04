function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (var i = 10; i <= 390; i = i + 10) {
    for (var x = 10; x <= 390; x = x + 10) {
    	circle(i, x, 5);
    }
  }
}
