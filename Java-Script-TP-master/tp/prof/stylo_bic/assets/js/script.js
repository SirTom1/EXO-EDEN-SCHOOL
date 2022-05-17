/*
EXO Bic Numérique
Créer un constructeur Stylo qui a les membres suivants :
- couleur (str)
- niveau (int)
- ouvert (bool)
- ecrire (f)

Le résultat attendu  est le suivant :
    - je ne peux écrire que si le bouchon est enlevé
    - je dois pouvoir décider d'ouvrir ou de fermer le stylo
    - à la création d'un nouvel objet le niveau d'encre est à 100, au fur et à mesure que j'écris ce niveau diminue, lorsque qu'il n'y a plus d'encre on ne peut plus écrire

    -BONUS-
    - on peut recharger l'encre
    - l'écriture (document.write()) se fait dans la couleur choisie pour le stylo
 */

let tablophrase = ['il faudrait se faire planter un cerveau', 'MAIS EUH enleve le stylo', 'tu a ... 2 de QI !' , 'reflechie ton boucon', "ALLLO LE BOUCHON !"]

function lasagnesKatramognes(color) {
    this.color = color;
    this.niv = 100;
    this.ouvert = false;

    this.open = function(){ this.ouvert = true}
    this.close = function(){ this.ouvert = false}

    this.ecrire = function(e){
      if(this.ouvert){
          console.log(e)
      }else{
          let rand = Math.floor(Math.random()*tablophrase.length);
            let rvalue = tablophrase[rand];
            console.log(rvalue)

      }

    };
}

let mama = new lasagnesKatramognes('yellow');
let compteurEncre = 100;
console.log(mama);

let btn = document.createElement("button");
btn.innerText = "enlever le bouchon";
document.body.appendChild(btn);

btn.addEventListener('click', function(){
    if(btn.innerText === "enlever le bouchon"){
        btn.innerText = "mettre le bouchon";
        mama.open();
        console.log(mama);
        btnR.style.display = "block";

    }else{
        btn.innerText = "enlever le bouchon";
        mama.close();
        console.log(mama);
        btnR.style.display = "none";

    }
});

let btnR = document.createElement("button");
btnR.innerText = "Ecrire !";
btnR.style.display = "none";
document.body.appendChild(btnR);
let startPage = document.createElement("h2");
startPage.innerText = "Cher ST Tom,";
startPage.style.marginLeft = "20px"
let letter = document.createElement("div");
letter.style.width = "50%";
letter.style.height = "80vh";
letter.style.backgroundColor = "#EEE5D6";
letter.style.position = "fixed";
letter.style.left = "25%";
document.body.appendChild(letter).appendChild(startPage);

btnR.addEventListener("click", function() {
if(mama.ouvert){
    if(compteurEncre > 0){
        let tuveuxquoi = prompt('Salut Bg des îles que puis-je faire pour toi ?');
        let tuveuxquoi2 = prompt('Et La couleur Chef ? (ex: red , blue, black, white, pink ect... les coulleur comme # & rgb marche ) ');

        let paraPerso = document.createElement("p");
        paraPerso.innerText = tuveuxquoi || "black";
        paraPerso.style.margin = "auto";
        paraPerso.style.width = "80%";
        paraPerso.style.fontSize = "30px";
        paraPerso.style.color = tuveuxquoi2;
        document.body.appendChild(letter).appendChild(paraPerso);
        compteurEncre -= tuveuxquoi.length / 2;
        bienOuBien();
    }else{
        alert(`tu n'a plus d'encre petit chenapant`)
    }
}else{
    alert('debouche ton stylo petit chenapant')
}

})
let fondEncre = document.createElement("div");
let encreS = document.createElement("div");
let oncompte = document.createElement("p");


document.body.appendChild(fondEncre).appendChild(encreS).appendChild(oncompte);
document.body.appendChild(fondEncre).appendChild(oncompte);

encre();

function encre() {

    encreS.style.width = 100 +"%";
    encreS.style.height = compteurEncre +"%";
    encreS.style.backgroundColor = "blue";

    oncompte.innerText = "encre : " + compteurEncre + "%";
    oncompte.style.position = 'absolute';
    oncompte.style.top = "10px";
    oncompte.style.left = "10px";

    fondEncre.style.display = "flex";
    fondEncre.style.alignItems = "end"
    fondEncre.style.width = "3%";
    fondEncre.style.height = "20vh";
    fondEncre.style.backgroundColor = "gray";
    fondEncre.style.border = " 5px solid black";
    fondEncre.style.color = "white";
    fondEncre.style.position = "fixed";
    fondEncre.style.left = "95%";


}

function bienOuBien() {
    encreS.style.height = compteurEncre +"%";

    oncompte.innerText = "encre : " + compteurEncre + "%";

}