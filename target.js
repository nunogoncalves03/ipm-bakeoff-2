// Target class (position and width)
class Target {
	constructor(x, y, w, l, id) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.label = l;
		this.id = id;
	}

	// Checks if a mouse click took place
	// within the target
	clicked(mouse_x, mouse_y) {
		return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
	}

	// Draws the target (i.e., a circle)
	// and its label
	draw() {
		// Draw target
        fill(102, 237, 237, 50);
        stroke(255,255,255, 125);
        strokeWeight(1);
		circle(this.x, this.y, this.width);

		// Draw label
        noStroke();
		textFont("Arial", 12);
        textStyle(BOLD);
		fill(color(255, 255, 255));
		textAlign(CENTER);
		text(this.label, this.x, this.y);
        textStyle(NORMAL);
	}
}
