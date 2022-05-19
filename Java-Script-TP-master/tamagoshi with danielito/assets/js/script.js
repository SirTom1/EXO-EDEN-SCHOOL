let formulaire = document.querySelector('form');
let createAne = document.querySelector('.createAne');
let textpseudo = document.getElementById("name").value;
let inscri = document.querySelector('aside');
// Afficher la valeur
createAne.addEventListener("click", function(){
    if(typeof str === 'string' && str.length > 0 ){
    alert('dont ok')

    }else{
        console.log(textpseudo);
        inscri.classList.add('hidden');

    }
})

createAne.addEventListener("click", function(event) {
    console.log("Désolé ! preventDefault() ne vous laissera pas cocher ceci.");
    event.preventDefault();
}, true);