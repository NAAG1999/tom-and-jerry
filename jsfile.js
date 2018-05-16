function init(){
  canvas = document.getElementById("mycanvas");
  H = canvas.height;
  W = canvas.width;
  console.log(canvas);
  pen = canvas.getContext("2d");
  jerry = { x:0, y:300, w:50, h:50, speed: 15 };
  tom = { y:0, x:300, w:50, h:50, speed: 10 };
  cheese = {x:500,y:300, w:50, h:50};
  game = false;
  window.addEventListener("mousedown",movej);
  function movej()
  {
    jerry.x= jerry.x + jerry.speed;
  }
  window.addEventListener("mouseup",stopj);
  function stopj(){
    jerry.x= jerry.x;
  }
draw();
}
function draw(){
  pen.clearRect(0,0,W,H);

  pen.fillStyle="red";
  pen.fillRect(jerry.x,jerry.y,jerry.w,jerry.h);


}
init();
