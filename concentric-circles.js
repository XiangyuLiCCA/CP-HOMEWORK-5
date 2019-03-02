function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var i = 0; i < 400; i = i + 10) {
    ellipse(200, 200, 1 + (390 - i));
  }
}
