function Obstacle() {
	this.position = createVector(0, 0);
	this.yspeed = 1;
	this.activated = false;
	this.size = 30;

	this.bounds = function(height) {
		if (this.position.y > height) {
			this.position.y = 0;
		} 
	}

	this.move = function() {
		if (frameCount % 240) {
			this.position.y += this.yspeed;
		} 
	}

	this.toggleActivation = function() {
		if (this.activated) {
			this.activated = false;
		} else {
			this.activated = true;
		}
	}

	this.getActivated = function() { 
		return this.activated; 
	}

	this.draw = function() {

		fill(230, 183, 255);
		stroke(0);
		strokeWeight(1);
		rect(this.position.x, this.position.y, this.size, this.size);
		rect(width - this.size - 1, this.position.y, this.size, this.size);

		if (this.activated) {		
			stroke(255, 0, 0);
			strokeWeight(5);
			line(this.size+2, this.position.y + (this.size/2), width-this.size-3, this.position.y + (this.size/2));
		}
	}
}