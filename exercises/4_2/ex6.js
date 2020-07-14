let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let element = 0;
let impares = [];
for (let index = 0; index < numbers.length; index+= 1) {
    if (numbers[index]%2 != 0) {
       impares.push(numbers[index])
       element += 1;
    }
}
if (element === 0) {
    console.log("Não há números ímpares");
} else {
    console.log("Há " +element+ " números ímpares sendo: " +impares);
}

