/*
   EXO Sac à dos

   Réaliser une classe Sac qui permettra de faire ses courses. Il ne peut contenir qu'un nombre limité d'articles.
  On peut y mettre des articles, chaque article ne peut être qu'en un seul exemplaire.
  On doit avoir les méthodes suivantes :
• Ajouter
• Contenu
• Taille
• Vide

-BONUS-
- je peux voir la liste de ce que le sac contient
- je peux retirer un objet du sac
*/


function Sac(poid, nom) {
    this.poid = poid;
    this.nom = nom;
    this.content = [];

}

let monsac = new Sac(10, "Feur")

console.log(monsac)
let compteurAritcle = 0;



let coterG = document.createElement("div"); // coter gauche
let coterD = document.createElement("div"); // coter droit

// on créer une image de mon sac
let sacVide = document.createElement('img');
sacVide.src = "assets/img/sacVide.png";
sacVide.style.height = "98vh";
sacVide.style.width = "63%";
document.body.appendChild(coterG).appendChild(sacVide);
// nbr d'article
let bloc = document.createElement('div');
bloc.style.position = "fixed";
bloc.style.top = "40vh"
bloc.style.left = "10vw"
let textNbr = document.createElement('h2');
let nbr = document.createElement('span');
textNbr.innerText = "Nombre d'article : ";
nbr.innerText = compteurAritcle;

document.body.appendChild(coterG).appendChild(bloc).appendChild(textNbr).appendChild(nbr);

//
let buttonadd = document.createElement("button");
buttonadd.innerText = "Click For ADD";
document.body.appendChild(coterD).appendChild(buttonadd);

coterG.style.float = "left"
coterD.style.float = "left"


buttonadd.addEventListener("click", function(){
    compteurAritcle += 1;
    nbr.innerText = compteurAritcle;

})
let compteurpoid = 0;

let fin = document.createElement('div');
fin.style.position = "fixed";
fin.style.top = "90vh"
fin.style.left = "5vw"
let lepoid = document.createElement('h2');
let nbrpoid = document.createElement('span');
lepoid.innerText = "Poids des Articles : ";
nbrpoid.innerText = compteurpoid + " kg";

document.body.appendChild(fin).appendChild(lepoid).appendChild(nbrpoid);


//

let comptprix = 0;

let prixfin = document.createElement('div');
prixfin.style.position = "fixed";
prixfin.style.top = "87vh"
prixfin.style.left = "5vw"
let leprix = document.createElement('h2');
let prix = document.createElement('span');
leprix.innerText = "Prix des Articles : ";
prix.innerText = comptprix + " €";

document.body.appendChild(prixfin).appendChild(leprix).appendChild(prix);


/// article
function articles(nom, prix, poids) {
    this.nom = nom;
    this.prix = prix;
    this.poids = poids;
}
let lesArticles = document.createElement("section");

//// SALADES
let salades = new articles ("Salade", 2.80, "0.5");

let ArticlesS = document.createElement("article");
let nomS = document.createElement("h3");
let priceS  = document.createElement("span");
let btnS = document.createElement("button");
console.log(salades[1]);
nomS.innerText = salades[0];
priceS = salades[1];
btnS = "ajoutez au panier";

document.body.appendChild(ArticlesS).appendChild(nomS)
