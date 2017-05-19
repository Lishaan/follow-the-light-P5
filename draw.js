var mouse;
var score;
var time;
var highscore = 0;
var player;
var food = [];
var enemies = [];
var totalEnemies = 0;
var totalFood = 5;

var levels;

var obstacle;

function setupGame() {

  levels = [true, true, true, true, true];

  obstacle = new Obstacle();

  food = [];
  enemies = [];

  player = new Mover(width/2, height/2);
  for (var i = 0; i < totalFood; i++) food.push(new Food());
  for (var i = 0; i < totalEnemies; i++) enemies.push(new Enemy(floor(random(400)), floor(random(400))));
  time = 0;
  if (score > highscore) highscore = score;
  console.log("Score: " + score);
  score = 0;

}

function setup() {
  createCanvas(600, 600);
  setupGame();
}

function draw() {
  background(29, 26, 49);

  // Levels
  // Level 1
  if (score >= 30 && levels[0]) {
    totalEnemies++;
    enemies.push(new Enemy(floor(random(400)), floor(random(400))));
    levels[0] = false;
  }


  // Mouse pointer
  noCursor();
  mouse = createVector(mouseX, mouseY);
  fill(255, 255, 255, 200);
  noStroke();
  strokeWeight(2);
  ellipse(mouse.x, mouse.y, 10, 10);

  // Mover methods
  player.seek(mouse);
  player.update();
  player.display();

  // Food
  for (var i = 0; i < totalFood; i++) {
    food[i].display();
    food[i].move();
    food[i].update();

    // Check for clashing
    var distance = dist(player.position.x, player.position.y, food[i].position.x, food[i].position.y);
    if (distance < food[i].size-1) {
      score++;
      food.splice(i, 1);
      if (food.length !== totalFood) {
        food.push(new Food());
      }
    }
  }

  // Enemies
  for (var i = 0; i < totalEnemies; i++) {

    var playerVector = createVector(player.position.x, player.position.y);

    enemies[i].display();
    enemies[i].seek(playerVector);
    enemies[i].update();

    // Check for clashing or Losing
    var distance = dist(player.position.x, player.position.y, enemies[i].position.x, enemies[i].position.y);
    if (distance < enemies[i].r) {
      setupGame();
    }
  }

  noStroke();
  fill(240, 140, 174);

  // Stats 
  text("Score: " + score, 10, 20);
  text("Time Elapsed: " + time + "s", 10, 40);
  text("Highscore: " + highscore, 500, 20);

  if (frameCount % 60 == 0) {
    time++;
  }
}
