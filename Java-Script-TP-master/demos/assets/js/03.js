// --1-- TANT QUE // WHILE

/*
variable pour compter les tours

tant que (condition si TRUE){
    code à répéter ...
    ...

    incrémentation du compteur (pour passer au tour de boucle suivant)
}
*/

// let i = '*'; // compteur initialisé à 0


// while( i<= 5 ){
//     document.write(i + '<br>');
//     // incrémentation
//     i++;

// }




// while( i<= 5 ){ // tant que i est inférieur  ou égale a 5
//     if (i % 2 == 0){
    
//     document.write('<p style="color: blue;">' + i + '</p>');
// } else {
//     document.write('<p style="color: red;">' + i + '<p style="color: red;">');
// }

// // incrémentation
// i++;

// }


// --2-- boucle FOR / POUR 


/*
pour (initialisation du compteur ; condition ; incrémentation){
        script à répeter 
        
}

*/ 

// let star = '*';

// for (let i = 0; i <= 5; ++i) {
  
//   for{
    
//   }
//   	console.log(i);
//   	document.write('<p>' + star + '</p>')
//     star += '*'; // star = star + '*';

//   }
//------------------------------------------------------------------------------
// let tag = '*';

// for (let i = 5; i > 0; i--) {
  
//   for(j = 0; j < i; j++){
//     document.write(`<span> ${tag} </span>`);
//   }
//   	document.write('<br>');
// }
  
// EXO SELECT 
//----------
// je veux afficher un menu déroulant de 1900 à 2021 inclus (compléter ce code) :


// ------


// document.write('<select>');
//     for ( let i = 2021; i >= 1900; i--) {
//         document.write('<option>' + i + '<option>');

//     }
//     document.write('</select>');



// for (let i = 12; i >= 0; i--) {
//   if(i == 8 || i == 7) {
//     console.log(' Ignition sequence start')
//   } else{
//     	console.log(i)

//   }
// }


// for (let i = 12; i >= 0; i--) {
//   console.log(i)
//   if(i == 8 ) {
//     i--;
//     i--;
//     console.log(' Ignition sequence start')
//   } 
// }
//   console.log(' All engines running')
//   console.log('Liftoff!')



///         DO WHILE

// let result = "let compteur passe à";
// let i = 0;
// document.write('<p>le compteur est initialisé à ' + i + '</p>');
// do{
//     document.write('<p>debut du tour n° ' + i + '</p>');
//     i++;
//     document.write(result + i);


// } while (i < 0)


// let i = 0; 
// while(i < 15){
//     console.log('bonjours n° ' + i);
//     i += 5; // i = i 5
// }