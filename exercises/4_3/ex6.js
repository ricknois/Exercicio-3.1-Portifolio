let num = 100;
let cont = 0;

for (let index = 0; index <= num; index+=1) {
    if (num%index === 0) {
        cont += 1;
    } else if (cont > 2){
        console.log("O número " +num+ " não é primo")
        break;
    }
}
    if (cont === 2) {
        console.log("O número " +num+ " é primo");
    }