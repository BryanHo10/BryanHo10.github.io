var x=30;
var y=300;
var jump=0;
var bottom=true;
var h=150;
var b=300;
var x1=1080;
var y1=300;
var y2=200;
var y3=100;

function setup(){

  createCanvas(1080, 400);
}

function draw(){
  background(200);
  fill(color(39,199,191));
  rect(x, y, 50, 50);
  /*y+=jump;
  if(y==h)
  	jump=10;
  if(y==b)
  {
  		jump=0;
  		bottom=true;
  }*/
  if(keyIsDown(LEFT_ARROW))
  {
  	x-=10;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
  	x+=10;
  }
  if(keyIsDown(UP_ARROW))
  {
  	y-=10;
  }
  if(keyIsDown(DOWN_ARROW))
  {
  	y+=10;
  }
  
  fill(0);
  x1-=10;
  rect(x1, y1, 50, 50);
  rect(x1, y2, 50, 50);
  rect(x1, y3, 50, 50);
  if(x1<=-50)
  	x1=width-50;
  if(x1==x+70&&y1==y)
  {
  //	alert("game over");
  }
  

}
function keyPressed()
{
	if(keyCode===32&&bottom)
	{
		jump=-10;
		bottom=false;
		//alert(b+"  "+h);
	}

}
