function shubidwa(){
    let chif = parseInt(prompt('met un chiffre entre 2 et 9'));
console.log(chif)

if(chif <= 9 && chif >= 2 ){
  for(let i = 1 ; i <= 10 ; i++){
	document.write(chif + ' x ' + i + ' = ' + chif*i)
    document.write('<br>')
  }
}else{
  alert('le chiffre ne comprend pas entre 2 et 9');
}

}