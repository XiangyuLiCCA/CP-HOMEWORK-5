function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);
	for (var i = 10; i <= 390; i = i + 10) {
		line(10, i, 390, i);
		//startX: 10 startY:i endX:390 endY: i

	}
}
