function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);
	for (var i = 1; i <= 201; i = i + 10) {
		line(200-i, i, i+200, i);
	}
	for (var j = 399; j >= 201; j = j - 10) {
		line(j - 200, j, 600 - j, j);

	}
}
