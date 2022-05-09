function retourneLaPhrase(str) {
    const RES = str.split('').reverse().join('');
    console.log(RES);
  }
  retourneLaPhrase('bonjour à tous');
  // ----------------- ÉNONCÉ -----------------
  // Créez un Algorithme qui va retourner une phrase.
  // par exemple : "Bonjour à tous" donnera "suot à ruojnoB"
  // Bonne chance.
  // ----------------- CONSEILS -----------------
  // La fonction join(), permet de transformer un tableau en chaine de caractère.
  // La fonction split(), permet de transformer une chaine de caractère en tableau.
  // La fonction reverse(), permet de retourner les éléments d'un tableau.
  