let start = parseInt(prompt('choissiez le nombre d\'étage que votre sapin a  '))
let etoile = "*";
for(let i = 0; i < start ; i++ ){

    for (let index = 0; index < 3; index++) {
        document.write('<h1 style="text-align : center;">')
        document.write(etoile)
        document.write('</h1>')   
    }
    
}