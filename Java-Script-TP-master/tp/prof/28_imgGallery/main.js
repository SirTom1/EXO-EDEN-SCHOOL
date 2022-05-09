const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let sous_pic1 = document.querySelector('#sous_pic1');
let sous_pic2 = document.querySelector('#sous_pic2');
let sous_pic3 = document.querySelector('#sous_pic3');
let sous_pic4 = document.querySelector('#sous_pic4');
let sous_pic5 = document.querySelector('#sous_pic5');

/* Looping through images */
sous_pic1.addEventListener('click', function(){
    console.log('tu a cliquer sur l image n*1');
    displayedImage.src = "images/pic1.jpg";
    displayedImage.style.visibility = "visible";
})
sous_pic2.addEventListener('click', function(){
    console.log('tu a cliquer sur l image n*2');
    displayedImage.src = "images/pic2.jpg";
    displayedImage.style.visibility = "visible";
})
sous_pic3.addEventListener('click', function(){
    console.log('tu a cliquer sur l image n*3');
    displayedImage.src = "images/pic3.jpg";
    displayedImage.style.visibility = "visible";
})
sous_pic4.addEventListener('click', function(){
    console.log('tu a cliquer sur l image n*4');
    displayedImage.src = "images/pic4.jpg";
    displayedImage.style.visibility = "visible";
})
sous_pic5.addEventListener('click', function(){
    console.log('tu a cliquer sur l image n*5');
    displayedImage.src = "images/pic5.jpg";
    displayedImage.style.visibility = "visible";
})
/* Wiring up the Darken/Lighten button */
let dark = "Darken";
let light = "lighter";
btn.innerText = dark;
let hide = "0";
let uncloack = "0.5";
btn.addEventListener('click', function() {

    if(btn.innerText == dark){
        btn.innerText = light;
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        
    } else{
        btn.innerText = dark;
        overlay.style.backgroundColor = "rgba(0,0,0,0)"; 

   }
})


