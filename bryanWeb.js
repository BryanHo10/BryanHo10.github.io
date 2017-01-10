var x=30;
var y=300;
var jump=0;
var bottom=true;
var h=150;
var b=300;

function setup(){

  createCanvas(1080, 400);
}

function draw(){
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

}
function keyPressed()
{
	if(keyCode===32&&bottom)
	{
		jump=-10;
		bottom=false;
		alert(base+"  "+height);
	}

}
