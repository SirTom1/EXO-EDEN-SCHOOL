let bouton = document.getElementById('bouton');
let rose = document.querySelector('.rose')
let left_pos = 0 ; 
let pluspos = 5;


function swapcolor(news){
    rose.style.backgroundColor = news;

}
bouton.addEventListener('click', function(){
   if(left_pos === 95){
    bouton.style.display = "none";
   }else{
    left_pos += pluspos ;
    rose.style.left = left_pos + "%";
    rose.style.display = "block";
    rose.style.border = "2px dashed lightblue";

    // swapcolor("red");
   }
})






// function diplace(){
//     left_pos += 9;
//     rose.style.left = left_pos + "px";
// }


// btn.addEventListener('click', diplace);