# Image Gallery

/!\ Vous n'avez pas besoin d'éditer le code HTML ni le code CSS. /!\

Vous avez reçu des fichiers HTML, CSS, des images et quelques lignes de code JavaScript; vous devez écrire le code JavaScript nécessaire pour en faire un programme fonctionnel.

### 1- Les parties les plus intéressantes du fichier CSS :
    >> Positionnez les trois éléments en absolu à l’intérieur du full-img <div>: le <img> dans lequel l’image est affichée grandeur nature, un  <div> vide dimensionné à la même taille que le <img> et placé juste au-dessus (ceci est utilisé pour appliquer un effet assombrissant à l'image via une couleur d'arrière-plan semi-transparente), et un bouton <button>qui est utilisé pour contrôler l'effet d'assombrissement.

    >> Réglez la largeur des images à l'intérieur de thumb-bar <div>(appelées images miniatures) à 20% et faites un float à gauche pour qu'elles soient côte-à-côte sur une ligne.

### 2- Le JavaScript doit :

    Itérer toutes les images dans une boucle, et pour chacune d'elle, insérer un élément <img> à l'intérieur de thumb-bar <div> qui va incorporer cette image dans la page.
    Associer un gestionnaire d'événement onclick à chaque <img> à l'intérieur de thumb-bar <div> pour que, lorsqu'elles sont cliquées, l'image correspondante soit affichée dans l'élément displayed-img <img>.
    Associer un gestionnaire d'événement onclick au <button> pour que, lorsqu'il est cliqué, un effet assombrissant soit appliqué à l'image grandeur nature. Losrqu'il est cliqué à nouveau, l'effet doit disparaitre.

### 3- Les différentes étapes

Les sections suivantes décrivent ce que vous avez à faire.

#### 3.1- Itération sur les images

Nous vous avons fourni des lignes qui storent une référence à thumb-bar <div> dans une variable nommée thumbBar, créent un nouvel élément <img>, définissent son attribut src à un emplacement de valueur xxx, et ajoutent ce nouvel élément <img> dans thumbBar.

Vous avez besoin de:

    >> Ajouter votre code en-dessous du commentaire Looping through images à l'intérieur d'une boucle qui itère sur les 5 images — vous n'avez besoin que de 5 itérations, chacune représentant une image.
    >> Remplacez, pour chaque itération,  la valeur xxx de l'emplacement par une chaîne de caractères qui correspond au chemin de l'image considérée. Il faut définir la valeur de l'attribut src dans chaque cas. Gardez à l'esprit que, à chaque fois, l'image est dans le répertoire des images et que son nom est pic1.jpg, pic2.jpg, etc.

#### 3.2- Ajout d'un gestionnaire onclick à chaque miniature

À chaque itération, vous devez ajouter un gestionnaire onclick au newImage courant. Il doit:

    >> Trouver la valeur de l'attribut src de l'image courante. Cela peut être fait avec la fonction getAttribute() sur <img>, en lui passant le paramètre "src" à chaque fois. Mais comment avoir l'image? Utiliser newImage ne marche pas du fait que la boucle est finie avant que le gestionnaire d'événement ne soit appelé; de cette manière, la valeur de src sera toujours celle du dernier <img>. Pour résoudre cela, gardez à l'esprit que, pour chaque gestionnaire d'événement, c'est <img> qui en est la cible. Pourquoi ne pas récupérer l'information de l'objet événement?
    >> Exécuter une fonction, en lui passant en paramètre la fameuse valeur de src. Vous pouvez nommer la fonction à votre guise.
    Cette fonction du gestionnaire d'événement doit définir la valeur de l'attribut src de displayed-img <img> à la valeur du src passé en paramètre. Nous vous avons fourni une ligne qui stocke une référence de l'<img> concerné dans une variable nommée displayedImg. Notez que nous voulons une fonction nommée.

#### 3.3- Écrire le gestionnaire du bouton d'assombrissement

Il ne reste que notre <button> d'assombrissement — nous vous avons fourni une ligne qui stocke une référence au <button> dans une variable appelée btn. Vous devez ajouter un gestionnaire onclick qui:

    >> Vérifie la classe appliquée à <button> — à nouveau, vous pouvez utiliser getAttribute().
    Si le nom de classe est "dark", changer la classe du <button> pour "light" (avec setAttribute()), son contenu textuel par "Lighten", et le background-color du voile d'assombrissement <div> par "rgba(0,0,0,0.5)".
    >> Si le nom de classe n'est pas "dark", changer la classe du <button> pour "dark", son contenu textuel par "Darken", et le background-color du voile d'assombrissement <div> par "rgba(0,0,0,0)".

Les lignes suivantes fournissent une base pour réaliser les changements  décrits aux points 3.2 et 3.3.

btn.setAttribute('class', xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;

/!\ Vous n'avez pas besoin d'éditer le code HTML ni le code CSS. /!\