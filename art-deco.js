function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  rectMode(CENTER);
  
  for (var x = 50; x < 390; x = x + 75) {
    for (var y = 10; y < 50; y = y + 10) {
      noFill()
      square(x, 250, y);
    }
  }
}
