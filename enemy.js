function Enemy(x,y) {
  this.acceleration = createVector(0,0);
  this.velocity = createVector(0,-2);
  this.position = createVector(x,y);
  this.r = 10;
  this.maxspeed = 3;
  this.maxforce = 0.1;

  // Update Location
  this.update = function() {
    // Update velocity
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed); // Speed Limit
    this.position.add(this.velocity);
    
    // Reset acc
    this.acceleration.mult(0);  
  };

  this.applyForce = function(force) {
    this.acceleration.add(force);
  };

  // STEER = DESIRED MINUS VELOCITY
  this.seek = function(target) {

    var desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target

    // Scale to maximum speed
    desired.setMag(this.maxspeed);

    // Steering = Desired minus velocity
    var steer = p5.Vector.sub(desired,this.velocity);
    steer.limit(this.maxforce);  // Limit to maximum steering force

    this.applyForce(steer);
  };

  this.display = function() {

    var theta = this.velocity.heading() + PI/2;
    fill(255, 124, 122);
    stroke(68, 2, 1);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  };
}