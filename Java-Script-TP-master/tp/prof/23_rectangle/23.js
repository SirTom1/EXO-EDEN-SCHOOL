let hider = document.getElementById("toggle-rectangle")
let rec = document.querySelector('div')
let important = document.querySelectorAll('.important')
let hide = document.querySelectorAll('.hide')
let good = document.querySelectorAll('.good')

hider.addEventListener('click', function(){
    rec.classList.toggle("hide");   
 
})



rec.addEventListener('mouseover', function(){
    rec.classList.toggle("important");   
 
})
rec.addEventListener('mouseleave', function(){
    rec.classList.toggle("important");   
 
})
rec.addEventListener('dblclick', function(){
    rec.classList.toggle("good");   
 
})


