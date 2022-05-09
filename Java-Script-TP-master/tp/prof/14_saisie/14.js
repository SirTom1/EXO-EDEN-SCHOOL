function shali(){
    let saisie = prompt('Saisie un chiffre entre 50 et 100')
console.log(saisie)

if (saisie < 50 || saisie > 100 ){
  alert('Ce nombre n\'est pas compris entre 50 et 100 ')
}else if (saisie > 50 || saisie < 100){
  	alert(saisie + ' est compris entre 50 et 100')
}

}