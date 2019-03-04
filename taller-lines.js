function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 200; i = i + 10) {
    line(i, 10, i, 2 * i - 10);
    line(200 + i, 10, 200 +i, 390)
  }
}
