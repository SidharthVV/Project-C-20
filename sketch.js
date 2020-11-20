var car , wall;
 var speed , weight;
function setup() {
  createCanvas(1350,650);
  
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(80,325,40,30);
  car.shapeColor = 'white';

  wall = createSprite(1000,325,30,150);
  wall.shapeColor = 'brown';
}

function draw() {
  background('black');  
  drawSprites();
  car.velocityX = speed;

  if(wall.x - car.x < wall.width+car.width ){
    car.velocityX = 0;
    var def = 0.5*weight*speed*speed/22500;

    if(def<100){
      car.shapeColor = 'green';
    }
    if(def<100 && def>180 ){
      car.shapeColor = 'yellow';
    }
    if(def>180 ){
      car.shapeColor = 'red';
    }
  }
}