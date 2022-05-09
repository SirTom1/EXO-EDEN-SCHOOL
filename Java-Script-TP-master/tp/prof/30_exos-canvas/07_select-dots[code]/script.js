var colorSelect = document.getElementsByTagName("select");
colorSelect[0].addEventListener('mouseup', clrSlt);
var cs = colorSelect[0];
var color;

function clrSlt() {
    color = cs.options[cs.selectedIndex].value;
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.fillStyle = "red";
ctx.fillRect(0,0,canvas.width,canvas.height);

canvas.addEventListener('mousedown', mousePos);

function mousePos(e) {
    var x = e.offsetX
    var y = e.offsetY

    ctx.fillStyle = color;
    ctx.fillRect(x, y, 10, 10);
}

