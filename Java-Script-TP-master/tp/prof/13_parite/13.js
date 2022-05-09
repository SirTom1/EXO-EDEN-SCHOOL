function mash(){
  let i = parseInt(prompt('Ton chiffre'));
let ideux = parseInt(prompt('fin'));


    for (i ; i <= ideux; i++) {
        if (i % 2 === 0) {
        console.log(i + " est pair");
          document.write(i + ' est pair')
                document.write('<br>')
    
        }else{
        
          console.log(i + " est impair"); 
                document.write(i + ' est impair')
          document.write('<br>')
        }
        }  
}