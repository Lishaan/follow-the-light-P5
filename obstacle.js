function Obstacle() {
	this.position = createVector(0, 0);
	this.yspeed = 1;
	this.activated = false;
	this.size = 30;

	this.move = function() {
		this.position.y -= this.yspeed;
	}

	this.activate = function() {
		console.log("activate");
	}

	this.draw = function() {
		if (this.activated) {
			console.log("activate");		
		} else {
			fill(230, 183, 255);
			stroke(3)
			rect(this.position.x, this.position.y, this.size, this.size);
			rect(width - this.size, this.position.y, this.size, this.size);
			line(this.position.x, width-this.size, 70, 70);
		}
	}
}