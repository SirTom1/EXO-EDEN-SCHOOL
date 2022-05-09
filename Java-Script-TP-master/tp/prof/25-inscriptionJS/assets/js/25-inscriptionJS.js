class inscription {
    constructor(pseudo , age , email){
        this.pseudo = pseudo
        this.age = age
        this.email = email

    }
}
let bloc = document.getElementById('bloc').style.display = "none";
let persos = [ 

         harry = new inscription("Harry" , 19, "hp@poudlard.fr"),
         hermione = new inscription("Hermione" , 20, "hg@poudlard.fr"),
         neville = new inscription("Neville" , 20, "nl@poudlard.fr"),
         ron = new inscription("Ronald" , 21, "rw@poudlard.fr"),
];
let enter = document.getElementById('enter');
let liste = document.getElementById('liste')
// 
let pseudo = document.getElementById('pseudo')
let age = document.getElementById('age')
let email = document.getElementById('email')
let password = document.getElementById('password'); 
//
let element2 = document.createElement("ul");

enter.addEventListener('submit' , function(e){
    e.preventDefault();
    persos.push(new inscription(pseudo.value , age.value, email.value));
    console.log(persos);
    bloc.style.display = "block";
});

for (const key in persos) {
    let perso  = persos[key];
    console.log(perso);
    let element2 = document.createElement("li");
    element2.innerText = perso.pseudo + ' : ' + perso.age + " ans";
    liste.appendChild   (element2);
}

