let tabprenom = ['pierre','feuille','cisseaux']
let start = " ";
function aleatoire(){
let rand = Math.floor(Math.random()*3)

// let cisse = 'cisseaux';
// let feu = 'feuille';
// let pi = 'pierre';

// cisse < pi;
// cisse > feu;
// feu > pi ;

console.log(tabprenom[rand])
    start = prompt("on vas jouez a un jeux pierre,feuille,cisseaux")
    
    if(tabprenom[rand] === start){
        alert('Vous avez eu egalité')
    }else if (tabprenom[rand] === cisse && start === pi || tabprenom[rand] === pi && start === feu || tabprenom[rand] === feu && start === cisse) {
        alert('Vous avez Win')
    }else if (tabprenom[rand] === pi && start === cisse || tabprenom[rand] === feu && start === pi || tabprenom[rand] === cisse && start === feu) {
        alert('Vous avez loose')
    }else{
        alert('vous avez mal ecrit !')
    }

}