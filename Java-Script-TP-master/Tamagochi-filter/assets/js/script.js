
let form = document.getElementById('name');
let newPara = document.createElement("div");
let  elem = document.createElement('div');
let nom = document.createElement('h2');
let compt = 0;
console.log(form.value)

// MON CONSTRUCTEUR D'ANIMEAUX
function animeaux(name, amour, faim, race, fatigue, food, age) {
    this.nom = name;
    this.amour = amour;
    this.faim = faim;
    this.race = race;
    this.fatigue = fatigue;
    this.food = food;
    this.age = age;
}

let dragon = new animeaux();
let chien = new animeaux();
let chat = new animeaux();
let cheval = new animeaux();


const cat = {
    humeur: 1,
    faim:2,
    fatifue:3
};
for (let keys in cat){
    document.write(cat[keys] += 10)
    console.log(cat[keys])

}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("confirm").addEventListener('click',function ()
    {
        document.body.appendChild(elem)
        let namechild = document.querySelector(".oject-cat-stat");
        console.log(namechild)
        namechild.appendChild(nom);
        let tab = form.value.toString();
        nom.innerText = tab;
        console.log(form.value);
        document.body.style.backgroundColor = "#B892FF";

    }  );
});