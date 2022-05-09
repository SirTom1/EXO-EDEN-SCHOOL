// //commentaire en ligne

// // alert('à la niche !');
// // alert('à la niche !');
// // alert('à la niche !');
// // alert('à la niche !');

// // 1. déclarer une variable


// let prenom;

// console.log('prenom');

// // 2. affetcter une valeur
// prenom = 'pixel';

// // 3. afficher dans la console la valeur initial de la variable
// console.log(prenom);
// let name = "Harry";

// //4. réafectation
// prenom = 'mathias';
// console.log(prenom);

// //5. types de variables
// let age = 11;
// let taille = 1.4;
// let parent = false;

// // 6. constantes
// const pays = 'France';

// // 7. Les boites de dialoges

// let info = alert('Info pour le client');
// let confirm = ('Question au client');
// let form = prompt('Champ à renseigner');

// console.log(info);
// console.log(confirm);
// console.log(form);


// age = prompt('Quel est ton age ?');
// age = 2021 - age;



// let name = prompt('Ton prenom mec s il te plait')
// let niche = 'A la niche'

// let casa = document.write( niche + ' ' + name + "!");


// let pomme = 'pommes'
// let poire = 'poires'
// let pommepoid = 0.8
// let poirepoid = 0.7
// let calcul = pommepoid + poirepoid

// let buy = 'vous avez acheté des'
// let total = 'pour un poids total de'

// let phrase = document.write( ' ' + buy + ' ' + pomme + ' kg' + ' et des ' + poire + ' kg' + ' ' + total + ' ' + calcul)

//  puis vous affichez la phrase "vous avez acheté des pommes et des poires pour un poids total de 1.5kg" 

//  let age = (prompt('Quel âge a tu l amie? ') );

//  if( age == '' || age === null){  // cas saisie erronée
//    document.write('répodez svp !') ;
//  } else if ( isNaN(age) ){ // age =/= chiffre 
//    document.write('vous n\'avez pas indiqué un nombre<br><hr>');
  
//  } else{
//    document.write('Vous avez indiqué avoir ' + age + 'ans<br><hr>')
//  }


/* true && true => true   && = et 
   true || true => true   || = ou 
   true && false => false   && = et  si un seul de faux tous est faux
   true || false => true   || = ou   si un seul de vrais tous est vrais

*/ 


// let yo = true;

/*
* opérations sur les variables
 */

// connaitre le type 
// let name = 'Harry';
// console.log(typeof(name));



// let nb1 = parseInt(prompt('nb ?'));
// let nb2 = prompt('nb ?');

// console.log(typeof(nb1));
// console.log(typeof(nb2));

// let res = nb1 * nb2
// console.log(res);

// retourne un chiffre décimal à partir d'une chaine 

// let decimal = parseFloat(prompt('nb'));
// console.log(decimal);
// console.log(typeof(decimal));


// convertir un number en string
// let nb = 10;
// let str = nb.toString();
// console.log(nb)
// console.log(str)
// console.log(typeof(nb))
// console.log(typeof(str))

// -- compter le nb de lettres d'une string

// let phrase = "Si vous êtes agités, à la niche !"
// console.log(phrase.length); // 33 escpace inclus / les espace comptes

// retourner une string en MAJ
// console.log(phrase.toLowerCase())

// extraire une partie d'une string 
   // console.log(phrase.slice(3, 10))
// slice(ptDépart + 1, pt arrivée)

// -- extraire une partie d'une string
// console.log(phrase.substring(3, 10))





/*                   SIGNE 
==  egale en valeur
=== egale en valeur et en type
>= plus ou égale
<= moin ou égale
!= different en valeur
!== different en valeur et en type
&&  si un seul et pas bon tous est faux
|| si un seul et bon tous est vrais 
*/ 