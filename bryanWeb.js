// var x1,x2,x3,y1,y2,y3;
// var increment=0;
// var lft=0;
// var rght=0;
// var angles;
// var a=0;
// var b=0;
// var mouseA,hyp,mouse1,mouse2;
// var par=[];



// function setup(){

//   createCanvas(400,400);
//   //background(0,0,0);
//   x1=0;
//   y1=-15;
//   x2=-10;
//   y2=5;
//   x3=10;
//   y3=y2;
//   angles=0;
//   for(var i=0;i<50;i++)
//   {
//   par[i]=
//   {
//   x:random(-width/2,width/2),
//   y:random(-height/2,height/2),
//    display:function()
//  { fill(0);
//   stroke(255);
//   rect(this.x,this.y,28,28);
//  },
//   move:function()
//   {
//     this.x=this.x+random(-1,1);
//     this.y=this.y+random(-1,1);
//   }

  
// }
//   }


// }

// function draw(){

//   translate(width/2,height/2);
//   //rotate(PI/2);
//   // mouse1=-(mouseX-width/2);
//   // mouse2=-(mouseY-height/2);
//   // hyp=(sqrt((mouse1*mouse1)+(mouse2*mouse2)));
//   // mouseA=-acos(mouse1/hyp);
  
//  // console.log(mouse2+ " , "+mouse1);
//   push();
//   background(0,0,0);
//   for(var i=0;i<50;i++)
//   {
//   par[i].display();
//   par[i].move();
//   }
//   rotate(angles);

//   angles+=increment;
  
//   fill(0);
//   stroke(255);
//   triangle(x1,y1,x2,y2,x3,y3);

//   pop();
//   fill(color(b,255,255));
  
//   a+=0.1;
//   b+=0.5;
//   if(a>=255)
//     a=0;
//   if(b>=255)
//     b=0;
  
  
  

// }
// function keyReleased()
// {
// increment=0;
// return false;
// }
// function keyPressed()
// {
//   if(keyCode==LEFT_ARROW)
//   {
// lft=1;
// increment=-0.1;
//   }
//   if(keyCode==RIGHT_ARROW)
//   {
// rght=1;
// increment=0.1;
//   }
//   // if(keyCode==UP_ARROW)
//   // {
//   //   y1--;
//   //   y2--;
//   //   y3--;
//   // }
// }
var x,y;
var col=1;
function setup(){
  createCanvas(800,800);
  background(0,0,0);
  colorMode(HSB);
}
function draw()
{
  if(mouseIsPressed)
  {

fill(col,255,255);
noStroke();
col+=5;
if(col>=255)
  col=0;
ellipse(mouseX,mouseY,29,29);
}



}
