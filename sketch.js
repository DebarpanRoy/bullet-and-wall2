

var bullet,wall,thickness;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(50,120)
	weight=random(30,321)
    thickness = random(22,83)

	bullet=createSprite(50, 200, 50,50);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1300,200,thickness,height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+bullet.width)/2)
  {
  	bullet.velocityX=0;
  	var destroy=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(destroy>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(destroy<10)
	{
		wall.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}













	
