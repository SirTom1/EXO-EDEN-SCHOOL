// let link = document.getElementById('google');
// let link = document.getElementsByClassName('google');
// let link = document.getElementsByTagName("a");
// let link = document.querySelector('.google');
let link = document.querySelector('#google');
// let link = document.querySelectorAll('a');


console.log(link);



// -- accéder au lien vers le quel pointe la balise 
console.log(link.href);

// -- accéder à l'ID
console.log(link.id);

// -- accéder à la classe 
console.log(link.className);

//-- accéder au text / contenue de la balise 
console.log(link.textContent);

//-- modifier le contenue 
link.textContent = "allez chez EDEN schooooool" ;

//----------------------------------------

// -- créer un nouvel élément 
let span = document.createElement('span');
// --lui donner un ID 
span.id = 'unSpan'
//-- lui ajouter du contenue  
span.textContent = "Friday Yay !"
// -- l'insérer dans le html 
link.appendChild(span);


/* -------------------------------
           EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h2> ayant un contenu de votre choix :
"A la niche !".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.

-------------------------------- */
let main = document.querySelector('main')




function h2ref (lien , content , couleur){
    let mash = document.createElement('h2');
    let encercle = document.createElement('a');
    encercle.style.color = couleur;
    encercle.style.textDecoration = "none";

    encercle.href = lien;
    encercle.textContent = content;
    main.appendChild(mash);
    mash.appendChild(encercle);
}

h2ref("https://docs.google.com/document/d/1HQw8aLo5U7eGV8Jfx5BWoG-uPvnv9l3fiT9Pq_sLza4/edit" , "A la niche !", "red");

