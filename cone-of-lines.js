function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 10; i <= 390; i = i + 10) {
    line(200, 0, i, 390);
		//startX: 200 startY:0 endX:i endY: 390

  }
}
