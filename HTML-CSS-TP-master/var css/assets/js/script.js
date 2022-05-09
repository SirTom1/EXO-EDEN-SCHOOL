let rut = document.querySelector(':root');
let dark_light = document.getElementById('dark_light');
let head = document.querySelector('header');
let classes = head.classList;
let li = document.querySelectorAll('li');

function masup(var_back , couleurdark , couleurlight , var_btn){

    let result = classes.toggle("darkmode");

    if (result) {
      
      dark_light.innerText = "Light Mode 💡"
      dark_light.style.setProperty(var_btn , couleurlight)
     rut.style.setProperty(var_back, couleurdark);
    } else {
      
      dark_light.innerText = "Dark Mode 🌙 "
      dark_light.style.setProperty(var_btn , couleurdark)
     rut.style.setProperty(var_back, couleurlight);

    }
    
}



let check = document.getElementById('check');
let section = document.getElementsByTagName('section');

let res = section.toggle("HideShow");

check.addEventListener('click', function(){
    
    if (res) {
        section.style.display = "none"

      } else {
        section.style.display = "block"


      }

})



