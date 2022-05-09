var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.fillStyle = "red";
ctx.fillRect(0,0,canvas.width,canvas.height);

canvas.addEventListener('mousedown', mousePos);

function mousePos(e) {
    alert("axe X: " + e.clientX + " axe Y:" + e.clientY);
}