function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  moveRect = createSprite(400,400,50,50);
  moveRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  moveRect.x = World.mouseX;
  moveRect.y = World.mouseY;
  if (moveRect.x - fixedRect.x < fixedRect.width/2 + moveRect.width/2 
    && fixedRect.x - moveRect.x < moveRect.width/2 + fixedRect.width/2
    && moveRect.y - fixedRect.y < fixedRect.height/2 + moveRect.height/2
    && fixedRect.y - moveRect.y < moveRect.height/2 + fixedRect.height/2) 
    {
      fixedRect.shapeColor = "red";
      moveRect.shapeColor = "red";
    } else {
      fixedRect.shapeColor = "green";
      moveRect.shapeColor = "green";
    }

  
  drawSprites();
}