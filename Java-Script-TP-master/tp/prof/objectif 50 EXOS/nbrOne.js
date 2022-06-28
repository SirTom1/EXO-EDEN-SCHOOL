// Print numbers from 1 to 10 // Imprimer les nombres de 1 à 10  1/1

for(let i = 1 ; i <= 10; i++){
    console.log(i);
}

// Imprimer les nombres impairs inférieurs à 100 // 2

for(let j = 0 ; j <= 100; j++){

    if(j %2 === 1){
        console.log('Impaires')
    }else{
        console.log('Pairs');
    }

}

//Print the multiplication table with 7 

for(let k = 0 ; k <= 10; k++){
    console.log(k*7);
}

// Imprimez toutes les tables de multiplication avec des nombres de 1 à 10 

for(let l = 0 ; l <= 10; l++){
    document.write('<h1> TABLE DE '+ l +' </h1>')
    document.write('<ul>')

    for(let m = 1 ; m <= 10; m++){
        document.write('<li > '+ l +' x '+ m + " = " + l*m +' </li>')


    }
    document.write('</ul>')

}