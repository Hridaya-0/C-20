var fr 
var mr
function setup() {
  createCanvas(400,400);
  fr = createSprite(200, 200, 50, 50);
  mr = createSprite(200,50,50,100);
  mr.shapeColor =("green");
  fr.shapeColor = ("green");
  
}

function draw() {
  background(0);
  mr.x=World.mouseX;
  mr.y=World.mouseY;
mr.debug="true";
fr.debug="true";
if (mr.x-fr.x <=  fr.width/2+mr.width/2 && fr.x-mr.x <= mr.width/2+fr.width/2 && mr.y-fr.y<= fr.height/2+mr.height/2 && fr.y-mr.y <= mr.height/2+fr.height/2){
mr.shapeColor = ("red");
fr.shapeColor = ("red");

}
else {
  mr.shapeColor =("green");
  fr.shapeColor = ("green");
}
  drawSprites();
}   