function Food() {
  this.position = createVector(floor(random(width)), floor(random(height)));
  this.speed = 1; //random(1) + 1;
  this.xspeed = 1 * this.speed;
  this.yspeed = 0 * this.speed;
  this.size = floor(random(30)) + 20;
  this.dirVal = floor(random(4));

  this.display = function() {
    fill(155, 58, 170);
    stroke(0);
    strokeWeight(2);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  };

  this.update = function() {
    this.position.x += this.xspeed * this.speed;
    this.position.y += this.yspeed * this.speed;
  };

  this.move = function() {
    this.dirVal = floor(random(4));
    if (frameCount % floor(random(360)) == 0) {
      switch (this.dirVal) {
        case 0: this.direction(0, -1); break; //Up
        case 1: this.direction(0,  1); break; // Down
        case 2: this.direction(1,  0); break; // Right
        case 3: this.direction(-1, 0); break; // Left
      }
    }

    // Boundaries
    if (this.position.y > height - (this.size/2)) this.direction(0, -1);
    if (this.position.x > width  - (this.size/2)) this.direction(-1, 0); 
    if (this.position.y < (this.size/2)) this.direction(0,  1);
    if (this.position.x < (this.size/2)) this.direction(1,  0);

  };

  this.direction = function(x, y) {
    this.xspeed = x * this.speed;
    this.yspeed = y * this.speed;
  };

}