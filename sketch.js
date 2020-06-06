var car,wall;
var weight,speed,deformation;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  wall=createSprite(800,200,60,200);

}

function draw() {
  background("black");  
  car.velocityX=speed;

  if(car.x-wall.x<wall.width/2+car.width/2 &&
    wall.x-car.x<wall.width/2+car.width/2 &&
    car.y-wall.y<wall.height/2+car.height/2 &&
    wall.y-car.y<wall.height/2+car.height/2){
      deformation=0.5 * weight * speed * speed/22500;
      car.velocityX=0;
    }
  if(deformation>100){
    car.shapeColor="green";
  }
  if(deformation<110 && deformation>190){
    car.shapeColor="red";
  }
  if(deformation<200){
    car.shapeColor="blue";
  }

  drawSprites();
}