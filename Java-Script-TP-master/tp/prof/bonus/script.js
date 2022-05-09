let eleves = [['Harry', 'Potter', 'JavaScript'], ['Hermione', 'Granger', 'PHP'], ['Ronald', 'Weasley', 'HTML'], ['Neville', 'Longbottom', 'CSS'], ['Draco', 'Malfoy', 'POO']];

  document.write("<ul>")
for(let i = 0 ; i < eleves.length ; i++){
	  document.write("<li>")
  document.write(eleves[i][0] + " " + eleves[i][1] + " prefere le " + eleves[i][2])
  document.write("</li>")
}

  document.write("</ul>")



  let eleves = [['Harry', 'Potter', 'JavaScript'], ['Hermione', 'Granger', 'PHP'], ['Ronald', 'Weasley', 'HTML'], ['Neville', 'Longbottom', 'CSS'], ['Draco', 'Malfoy', 'POO']];

  document.write("<ul>")
for(let i = 0 ; i < eleves.length ; i++){
	  document.write("<li>")
	for(let j = 0 ; j < 1; j++){
    
  document.write(eleves[i][0] + " " + eleves[i][1] + " prefere le " + eleves[i][2])
  
  }
  document.write("</li>")
}

  document.write("</ul>")



  /**
 * CONSIGNE : Affichez la liste des élèves qui sont reçus à leur examen (note de 10 et plus) qui sont stockés dans le tableau. L'affichage se fera sous forme de liste dans la page.
 * Puis, dans une seconde liste, afficher cette fois les élèves recalés (note inférieure à 10).
 */



let arr = [
  ['Harry', 'Potter', 16],
  ['Neville', 'Longbottom', 14],
  ['Ron', 'Weasley', 8],
  ['Lavender', 'Brown', 12],
  ['Gregory', 'Goyle', 9],
  ['Seamus', 'Finnigan', 10],
  ['Hermione', 'Granger', 18],
  ['Draco', 'Malfoy', 17],
  ['Hannah', 'Abbot', 7],
  ['Katie', 'Bell', 12],
];

document.write("<div style = 'width: 25%; float : left' >")

document.write("<h1> Reçu : </h1>" )

document.write("<ul>")
for(let i = 0 ; i < arr.length ; i++){
if(arr[i][2] >= 10){
      document.write("<li>")
document.write(arr[i][0] + " " + arr[i][1] + " a eu " + arr[i][2])
document.write("</li>")
}

}

document.write("</ul>")


document.write("</div>")




document.write("<div style = 'width: 25%; float : left' >")

document.write("<h1> NON Reçu : </h1>" )

document.write("<ul>")
for(let i = 0 ; i < arr.length ; i++){
if(arr[i][2] < 10){
      document.write("<li>")
document.write(arr[i][0] + " " + arr[i][1] + " a eu " + arr[i][2])
document.write("</li>")
}

}

document.write("</ul>")


document.write("</div>")

