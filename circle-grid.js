function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(20);

	for (var x = 25; x < 390; x = x + 25) {
		for (var y = 25; y < 390; y = y + 25) {
			ellipse(x, y, 20, 20);
		}
	}
}
