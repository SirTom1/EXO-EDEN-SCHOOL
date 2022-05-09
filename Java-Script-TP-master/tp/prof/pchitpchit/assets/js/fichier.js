let bloc_bleue = document.getElementById('bloc_bleue'); // haut
let bloc_vert = document.getElementById('bloc_vert'); // left
let bloc_red = document.getElementById('bloc_red'); // right
let bloc_jaune = document.getElementById('bloc_jaune'); // bot
let posy = 0;
let posx = 0;

let bloc = document.querySelector('.bloc');
function change_back(){
    let  randomColor =  Math.floor(Math.random()*16777215).toString(16);
    bloc.style.backgroundColor = "#" + randomColor;
}


function change_back_bord(){
    let style_border = [ "none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
    let  randomBord =  Math.floor(Math.random()*10);

    let  random_color_bord =  Math.floor(Math.random()*16777215).toString(16);

    bloc.style.border = "10px " + style_border[randomBord] + "#" + random_color_bord;
}


function up(){
    posy -= 10;
    bloc.style.top = posy + "px";
    change_back()
    bloc.style.borderRadius = "25% 10%"
    bloc.style.border = "initial";

}
function down(){
    posy += 10;
    bloc.style.top = posy + "px";
    change_back()
    change_back_bord()
    bloc.style.borderRadius = "initial"

}

function left(){
    posx -= 10;
    bloc.style.left = posx + "px";
    change_back()
    change_back_bord()
    bloc.style.borderRadius = "initial"

}
function right(){
    posx += 10;
    bloc.style.left = posx + "px";
    change_back()
    bloc.style.borderRadius = "50%"
    bloc.style.border = "initial";

}

bloc_bleue.addEventListener('click', up);
bloc_vert.addEventListener('click', left);
bloc_red.addEventListener('click', right);
bloc_jaune.addEventListener('click', down);


window.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp' || event.code == 'KeyW' ) {
        up();
    }
  });

  window.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowDown' || event.code == 'KeyS') {
        down();

        }
  });

  window.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowLeft' || event.code == 'KeyA') {
        
        left();

    
        }
  });

  window.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowRight' || event.code == 'KeyD') {
        right();
    }
  });