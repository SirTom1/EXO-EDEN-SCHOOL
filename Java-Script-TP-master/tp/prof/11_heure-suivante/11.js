let heure = prompt("Entrez l'heure :");
let minute = prompt("Entrez les minutes :");
let seconde = prompt("Entrez les secondes :");

// on teste les cas possibles ex: heure >= 0 et heure <= 23 (les cas d'erreurs sont dans le ELSE)
if (heure >= 0 && heure <= 23) { 
    // on incrémente les secondes
    seconde++;

    // si les secondes sont déjà à 60
    if (seconde == 60) {
        // on met les secondes à 0 et passe à la minute suivante
        seconde = 0;
      	minute++;

        // si les minutes sont déjà à 60
        if (minute == 60) { 
            // on met les minutes à 0 et passe à l'heure suivante
            minute = 0;
          	heure++;

            // si l'heure est 24
            if (heure == 24) { 
                // l'heure suivante est minuit
                heure = 00;
            }
        }
    }
    // affichage de l'heure
    document.write("<h3>Dans une seconde il sera " + heure + " h " + minute + " m " + seconde + " s</h3>");
} else {
    // heure incorrecte
    document.write("Heure incorrecte !");
}