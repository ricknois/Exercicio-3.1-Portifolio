let num1 = 100;
let num2 = 100;
let num3 = 100;

if(num1 > num2 && num1 > num3){
    console.log("O maior é " + num1);
}else if (num2 > num1 && num2 > num3) {
    console.log("O maior é " + num2);
}else if (num3 > num1 && num3 > num2){
    console.log("O maior é " + num3);
}else{
    console.log("Os números são iguais");
}
