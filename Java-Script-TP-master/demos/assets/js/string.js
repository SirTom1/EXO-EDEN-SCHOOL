// --1-- typeof permet de connaître le type de ma variable
let name = "Harry"; // string
let age = 11; // integer
let taille = 1.4; // float
let parents = false; // boolean

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(taille));
console.log(typeof(parents));

let nb = "24";
console.log(nb);
console.log(typeof(nb));

// -- La Fonction parseInt() pour retourner un Entier à partir de ma chaine de caractère
nb = parseInt(nb);
console.log(nb);
console.log(typeof nb);

// -- Je ré-affecte une valeur à ma variable
nb = "12.55";
console.log(nb);
console.log(typeof nb);

// -- La Fonction parseFloat() permet de retourner un Float sur la Base d'une chaine de caractère
nb = parseFloat(nb);
console.log(nb);
console.log(typeof nb);

// -- Conversion d'une variable en String avec toString()
let nbToStr = 10;
let str = nbToStr.toString();
console.log(nbToStr);
console.log(typeof nbToStr);
console.log(typeof str);

// -- les 3 méthodes de conversion d'un number en string
let a = String(12);
console.log(a);
/**
/!\ toString() ne marche pas si la valeur est UNDEFINED ou NULL
 */

let b = "" + 24;
console.log(b);

let nb = 99;
let c = nb.toString();
console.log(c);

// Si je convertit un BOOLEEN en string, on ne peut pas faire la manipulation inverse
let status = false;
let str = status.toString(); // "false"
let back = Boolean(str); // true

// -- Compter les lettres d'une chaîne de caractères
let phrase = "Si vous êtes agités, à la niche !";

// La propriété length représente la longueur d'une chaine de caractères.
// Donc le résultat ici est: 33.
console.log(phrase.length);

// -- Mettre en majuscules
// Donc le résultat ici est: "SI VOUS ÊTES AGITÉS, À LA NICHE !!".
console.log(phrase.toUpperCase());

/* -- Mettre en minuscules -- */
// Donc le résultat ici est: "si vous êtes agités, à la niche !"
console.log(phrase.toLowerCase());

/* -- Trouver la position d'un ou plusieurs caractères -- */
/* -- indexOf() -- lastIndexOf() */
// "indexOf" renvoie l'indice de la première occurence de la valeur cherchée
// au sein de la chaîne courante (à partir de indexDébut).
// Elle renvoie -1 si la valeur cherchée n'est pas trouvée.
// Donc le resultat ici est: 17
console.log(phrase.indexOf("agités"));

// si le resultat de maChaine.indexOf("ABCD") est égal à -1
// cela signifie que la string recherchée n'existe pas
// en d'autres mots si on trouve pas de "ABCD" dans maChaine
// l'instruction alert vas être exécuté.
if(phrase.indexOf("ABCD") == -1) alert("ce mot n'existe pas");

// "indexOf" peut prendre un second argument indexOf(sous-chaîne, point de départ)
let test = "This is a string";
console.log(test.indexOf("is", 3)); // 5

/* -- Accéder à un caractère dans une string -- */
let str = "Hello";
console.log(str[0]); // "H"
console.log(str[str.length -1]); // le dernier -> "o"

// la méthode avant ES5
console.log(str.charAt(0)); // "H"

/* -- La méthode slice() extrait une section de la chaine de caractères -- */
// et renvoie une nouvelle chaine de caractères.
// Par exemple, phrase.slice(3, 10) extrait le quatrième caractère jusqu'au dixième caractère.
// Donc le resultat ici est le string: "méthode"
phrase = "La méthode slice() extrait une section de la chaine de caractères."
console.log(phrase.slice(3, 10));

/* -- Extraire une sous-string -- */
// La méthode substr() renvoie les caractères d'une chaîne de caractères
// commençant à un endroit donné et sur une longueur donnée.
// Autrement dit, cette méthode renvoie la sous-chaîne de la chaîne courante à partir d'un indice
// Donc le resultat ici est le String: "méthode"
console.log(phrase.substr(3, 7));

// La méthode substring() permet d'extraire une sous-chaîne avec le point de départ et le point d'arrivée (et non la longueur comme dans substr())
// substring(startIndex,endIndex)
let strJs = "JavaScript String";
console.log(strJs.substring(4, 10)); // "Script"