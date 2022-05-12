// ----------------- ÉNONCÉ -----------------
/**
 * Créer un objet littéral pour une voiture
 * Cet objet devra avoir les propriétés suivangtes :
 *  - marque (str)
 *  - couleur (str)
 *  - motorisation (obj) détaillant :
 *          - énergie (str)
 *          - puissance (str)
 *          - garantie (bool)
 *
 * et la méthode
 *  - afficherOrigine (f)
 *  qui va simplement afficher le pays d'origine de la voiture
 *
 *  Afficher une par une dans la page dans des paragraphes les informations suivantes :
 *  - la marque de la voiture,
 *  - sa couleur,
 *  - son origine,
 *  - son énergie,
 *  - si elle est sous garantie ou non.
 */
let voitour ={
    marque :  "Toyota Sprinter Trueno AE86",
    couleur : "Noir/Blanc",
    motorisation : {
        posDuMoteur : "Avant",
        energie : "essence",
        puisMax : "6 600 tr/min ",
        transmi : "Propulsion",
        garentie : false
    },
    pav : 940,
    annee : 1983,
    prix :  32000,
    origin : "japon"
};
document.write(`<h1> Voiture ${voitour.fabrican} ${voitour.marque} : </h1> `);
document.write(`<ul> motorisation :`);
document.write(`<li> ${this.posDuMoteur} </li>`);
document.write(`<li>  ${this.posDuMoteur} </li>`);
document.write(`</ul>`);
console.log(voitour.motorisation);

for (let prop in voitour.motorisation) {
    console.log(`obj.${prop} = ${voitour.motorisation[prop]}`);
}