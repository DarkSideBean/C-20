var fixedRect, movingRect;

function setup() {
  createCanvas(400,400);

  fixedRect = createSprite(200, 200, 100, 50);
  fixedRect.shapeColor = rgb(218, 66, 245);
  fixedRect.debug = true;
  
  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor = rgb(218, 66, 245);
  movingRect.debug = true;
}

function draw() {
  background(66, 245, 218);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2); 
  
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
      fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
      movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
      fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }else{
    movingRect.shapeColor = rgb(218, 66, 245);
    fixedRect.shapeColor = rgb(218, 66, 245);
  }

  drawSprites();
}