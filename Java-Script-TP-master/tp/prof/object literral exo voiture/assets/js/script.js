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
let h1 = document.querySelectorAll("h1");

let voitour ={
    marque :  "Toyota Sprinter Trueno AE86",
    couleur : "Noir/Blanc",
    motorisation : {
        positionDuMoteur : "Avant",
        energie : "essence",
        puissanceMax : "6 600 tr/min ",
        transmition : "Propulsion",
        garentie : false
    },
    pav : 940,
    année : 1983,
    prix :  32000,
    origin : "japon"
};







document.write(`<h1> Voiture ${voitour.fabrican} ${voitour.marque} : </h1> `);


document.write(`<ul>`);

for (let [key, value] of Object.entries(voitour)) {
    if(key === "motorisation"){

        document.write(`<ul> <h2>Motorisation :</h2> `);
        for (let [key, value] of Object.entries(voitour.motorisation)) {

            document.write(`<li>${key} :  ${value} </li>`);
        }
        document.write(`</ul>`);

    }
    else{
        document.write(`<li>${key} :  ${value} </li>`);

    }
}
document.write(`</ul>`);

