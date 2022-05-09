let clickadd = document.getElementById('clickadd')
let  DisJus   = document.querySelector("#DisJus");

let  DisJus2   = document.querySelector(".DisJus2");

// point
let start_nbr = document.getElementById('start_nbr');
let zero = 0;
start_nbr.innerText = zero;




let carte_return = 'assets/img/dos.png';

let tablo = {
            "bilgewater" : "assets/img/bilgewater.png", // 1
            "demacia" : "assets/img/demacia.png",  // 2
            "freljord" : "assets/img/freljord.png", // 3
            "ionia" : "assets/img/ionia.png",  // 4
            "ixtal" : "assets/img/ixtal.png",  // 5
            "piltover" : "assets/img/piltover.png", // 6
            "shadow-isles" : "assets/img/shadow-isles.png", // 7
            "shurima" : "assets/img/shurima.png", // 8
            "targon" : "assets/img/targon.png", // 9
            "zaun": "assets/img/zaun.png" // 10        
}

let tableur = [
     "assets/img/bilgewater.png", // 1
     "assets/img/bilgewater.png", // 1

     "assets/img/demacia.png",  // 2
     "assets/img/demacia.png",  // 2

     "assets/img/freljord.png", // 3
     "assets/img/freljord.png", // 3

     "assets/img/ionia.png",  // 4
     "assets/img/ionia.png",  // 4

     "assets/img/ixtal.png",  // 5
     "assets/img/ixtal.png",  // 5

     "assets/img/piltover.png", // 6
     "assets/img/piltover.png", // 6

     "assets/img/shadow-isles.png", // 7
     "assets/img/shadow-isles.png", // 7

     "assets/img/shurima.png", // 8
     "assets/img/shurima.png", // 8

     "assets/img/targon.png", // 9
     "assets/img/targon.png", // 9
    
     "assets/img/zaun.png", // 10        
     "assets/img/zaun.png" // 10        
]


let confirm = [

];




function add(pchitpchit) {
    zero += pchitpchit;
    start_nbr.innerText = zero;

}

function show() {
    DisJus.style.display = "none";

    for(let j = 0 ; j < 20 ; j++){
        crate( j);

    }
}    


clickadd.addEventListener('click', show); // au click ça randome les cartes et ça start le jeux


for(let i = 0 ; i < 20 ; i++){
    console.log(document.getElementById('cartenbr') + i)
}


function crate(nbrclass ) { // créer les cartes et attribue a chaqu'un deux class une globale et une perso

    // let rand = Math.floor(Math.random()*tableur.length); // randome une carte 
    // let rValue = tableur[rand];
    // console.log(rValue)

    let img = document.createElement("img");
    img.src = carte_return;
        img.id = "cartenbr" + nbrclass;
    img.classList = "carte";
    console.log(img.id);

    console.log(img.classList);
    DisJus2.appendChild(img);

}

function verif(carte_un , carte_deux) {
    if(carte_un.src === carte_deux.src){
        alert("bien vu chacal plus 1 point")
        add(1);
    }else{
        alert('rip')

    }
}
