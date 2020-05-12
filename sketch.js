var bullet, wall;
var speed,weight, thickness;

function setup() {
  createCanvas(1400,400);

  bullet = createSprite(50, 200, 50, 15);
  wall = createSprite(1300,200,thickness,height/2);

  bullet.shapeColor = "black";
  wall.shapeColor = color(80,80,80);

  speed = random(10,30);
  weight = random(10,50);
  thickness = random(100,500);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet, wall)){
    
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;

    if(damage > 500) {
      wall.shapeColor = "red";
    }
    if(damage < 500) {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}