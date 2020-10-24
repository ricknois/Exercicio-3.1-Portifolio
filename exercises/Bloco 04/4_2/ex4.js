let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let element = 0;
for (let index = 0; index < numbers.length; index++) {
    element += numbers[index]
}
if ((element / numbers.length) > 20) {
    console.log("Maior que 20");
} else {
    console.log("Menor que 20");
}