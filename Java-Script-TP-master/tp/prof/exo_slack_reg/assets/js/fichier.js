function verif(regex, chaine){
    let letsgo;
    if (regex.test(chaine[0])) {
        letsgo = " contient ";
    } else {
        letsgo = " ne contient pas ";
    }
    console.log(chaine + letsgo + regex.source);
}
verif(/[ABCD]/i, "Archem");     


function verif(regex, chaine){
    let letsgo;
    if (regex.test(chaine)) {
        return true
    } else {
        return false
    }

}
verif(/[@]/, "Archem"); 




function verif(regex, chaine){
    console.log(	regex.test(chaine))
  }
  verif(/[0-9]/, "Archem");   
  
  ///////////////
  
  function verif(regex, chaine){
  
    console.log(regex.test(chaine))


}
verif(/[A-D]/, "Archem");     
