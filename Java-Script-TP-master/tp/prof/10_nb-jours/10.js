let tableau = ["28","30","31"];
let nombre = parseInt(prompt("Quelle mois on est aujourd'hui entre 1 et 12"));

if (isNaN(nombre)){
    alert("en nombre s'il te plait");
}
else {
    if (nombre > 12 || nombre < 1) {
        alert("oe bas oe logique il y a " + nombre + ' mois on y crois tous');
    } else if (nombre === 1 || nombre === 3 || nombre === 5 || nombre === 7 || nombre === 8 || nombre === 10 || nombre === 12) {
        alert(tableau[3]);
    } else if (nombre === 2) {
        alert(tableau[0]);
    } else if (nombre === 4 || nombre === 6 || nombre === 9 || nombre === 11) {
        alert(tableau[1]);
    }
}


/* 

let nombre = parseInt(prompt("Quelle mois on est aujourd'hui entre 1 et 12"));
function mois (month, year) {
    return new Date(year, month, 0).getDate();
}
mois(nombre,2021);


*/