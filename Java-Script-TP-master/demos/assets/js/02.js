/**
 * LES CONDITIONS
 */

// --1-- IF ... ELSE IF ... ELSE
if( 1 < 10){
    document.write('IF ... SI <hr>')
} else if (1 > -10) {
    document.write('ELSE IF ... SINON SI <hr>')
} else {
    document.write('ELSE ... SINON <hr>')
}





// // --2-- SWITCH

// let query = prompt('oui ou non')

// switch(query) {
//     case 'oui': //if
//         document.write('vous avez dit oui');
//         break; // si le cas est true on sort du switch ici

//     case 'non' : // else if
//         document.write('vous avez dit non') 
//         break; //si le cas est true on sort du switch ici

//     default: //else
//         document.write('reponse non reconnue')
// }


let question = prompt('es ce que ta maman et celibataire ?')

switch(question) {
    case 'oui': //if
        document.write('il y a moyen tu me la présente s\'il te plait fiston');
        break; // si le cas est true on sort du switch ici

    case 'non' : // else if
        document.write('Bas présente la moi quand meme elle vas changer d\'avis') 
        break; //si le cas est true on sort du switch ici

    default: //else
        document.write('réponds fiston ')
}