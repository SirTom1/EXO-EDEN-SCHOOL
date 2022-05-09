let favFood = ['baba au rhum', 'steak frite', 'mashalo']; 
console.log(favFood[1]);
console.log(favFood);
favFood.pop();
favFood.push('Caramouille');
let ancienfavFood = favFood.shift();
console.log(ancienfavFood);
favFood.push('La soupe de soupexe');
favFood.unshift('la purré')


let tableauvide = [ ]; 
tableauvide.pop()
console.log(tableauvide)

let suplice = [2, 3, 4, 5];
suplice.splice(1, 1);
console.log(suplice);

let morce = ["alpha", "gamma", "delta"];
morce.splice(1, 0, 'chouquette');
console.log(morce);

let qwa = [10,-10,-5,-3,2,1];
qwa.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);
console.log(qwa);



