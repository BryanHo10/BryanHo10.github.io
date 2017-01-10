var x=30;
var y=300;
var jump=0;
var bottom=true;
function setup(){

  createCanvas(1080, 400);
}

function draw(){
  background(200);
  fill(color(39,199,191));
  rect(x, y, 50, 50);
  y+=jump;
  if(y==150)
  	jump=10;
  if(y==300)
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
	}

}
