var x=200;
var y=300;
var jump=0;
var bottom=true;
var h=150;
var b=300;
var x1=1080;
var x2=x1+500;
var y1=300;
var count=0;
var speed=10;
var speedX=10;

function setup(){

  createCanvas(1080, 400);
  alert("LEFT_ARROW = Left \nRIGHT_ARROW = Right \nSPACE = Jump");
}

function draw(){
  var start=width-50;
  background(200);
  fill(color(39,199,191));
  rect(x, y, 50, 50);
  y+=jump;
  if(y==h)
  	jump=10;
  if(y==b)
  {
  		jump=0;
  		bottom=true;
  }
  if(keyIsDown(LEFT_ARROW))
  {
  	x-=speed;
  	if(x<=0)
  		x=0;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
  	x+=speed;
  	if(x>=width-50)
  		x=width-60;
  }  
  fill(0);
  x1-=speedX;
  x2-=speedX;
  rect(x1, y1, 50, 50);
  //rect(500,0,10,400);
 // rect(0, y1, 50, 50);
  rect(x2, y1, 50, 50);
  if(x1<=-50)
  {
  	x1=start;
  }
  if(x2<=-50)
  {
  	x2=start+500;
  }
  if(x1<=x+40&&x1+50>=x&&y1<=y+40)
  {
  	alert("game over \n Score="+count);
  	count=0;
  	x1=start;
  	x2=start+500;
  }
  else if(x2<=x+40&&x2+50>=x&&y1<=y+40)
  {
  	alert("game over \n Score="+count);
  	count=0;
  	x1=start;
  	x2=start+500;
  }
  

}
function keyPressed()
{
	if(keyCode===32&&bottom)
	{
		jump=-10;
		bottom=false;
		count++;
		//alert(b+"  "+h);
	}
	if(keyCode===80&&speedX>0)
	{
		speedX=0;
	}
	else if(keyCode===80)
		speedX=10;

}

