var aux = "";
function verificaPalindrome(palavra) {
    let array = palavra.split("");
    for (let index = array.length -1 ; index >= 0; index--) {
        aux += array[index];
    }
    if(aux === palavra){
        return "true";
    }else
    return  "false"
}
console.log(verificaPalindrome('arara'));
