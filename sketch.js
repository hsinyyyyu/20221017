function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)//設定方塊座標以中心點為座標
  background(0);//背景顏色為黑色
  noFill()//不充滿顏色
  stroke("#cdb4db")//框線為紫色
  var w = mouseX/10
  //第一行(x軸)
  for(var i=0;i<width/50;i++)//i++就是i=i+1
  {
  ellipse(25+50*i,38,w)
  triangle(25+50*i,0,0+50*i,50,50+50*i,50)
  triangle(25+50*i,75,0+50*i,25,50+50*i,25)
  }
  //
  for(var i=0;i<width/50;i++)//i++就是i=i+1
  for(var j=0;j<width/50;j++)
  {
  ellipse(25+50*i,38+50*j,w)
  triangle(25+50*j,0+50*i,0+50*j,50+50*i,50+50*j,50+50*i)
  triangle(25+50*j,75+50*i,0+50*j,25+50*i,50+50*j,25+50*i)
  }
}