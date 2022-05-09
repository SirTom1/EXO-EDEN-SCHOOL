function ctof (){
    let a = parseFloat(prompt('Convertire C° to F°'));
        let convertiseur = (a - 32) / 1.8;
        alert(convertiseur.toFixed(1) + ' F°');

}

///////

function ftoc (){
      let a = parseFloat(prompt('Convertire F° to C°'));
let convertiseur = a* 9/5 + 32;

        alert(convertiseur.toFixed(1) + ' C°');

}




