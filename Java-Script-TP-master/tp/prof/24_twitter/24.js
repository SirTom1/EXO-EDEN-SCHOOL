var textarea = document.querySelector('#tweetContent')
var blockCount = document.getElementById('counterBlock')

function count() {
    var count = 140-textarea.value.length;


    blockCount.innerHTML= count;
    
   if(count<0) {
    	blockCount.classList.add("red");
   } 
   else if(count>=0) {
     	blockCount.classList.remove("red");
   }
   else{}
}

textarea.addEventListener('keyup', count);
count();
