function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 0; i <= 200; i = i + 10) {
    line(200 - i, i, 200 + i, i);
    line(200 + i, 400 - i, 200 - i, 400 - i);
  }
}
