let tableau = ["Lundi", "Mardi","Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
let jour = prompt("Saisie un jour valide")
if (jour === tableau){
   alert("Ce jour est valide")
} else if (jour === "Lundi"){
    alert("Bon courage pour la reprise")
} else if (jour === "Mardi") {
    alert("Plus que 3 jours")
} else if (jour === "Mercredi") {
    alert("Aujourd'hui que le matin")
} else if (jour === "Jeudi") {
    alert("Plus que 1 jour")
} else if (jour === "Vendredi") {
    alert("Ce soir le week end commence")
}    else if (jour === "Samedi") {
    alert("Debut du week end")
} else if (jour === "Dimanche") {
    alert("Fin du week end prépare toi pour lundi")
} else{
    alert("Ceci n'est pas un jour valide !")
}