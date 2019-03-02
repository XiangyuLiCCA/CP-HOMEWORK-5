function setup() {
	createCanvas(400, 400);
}
function draw() {
	background(255);

	for (var i = 0; i < 400; i = i + 5) {
		line(i, i +200, i, i - 400);
	}
}
