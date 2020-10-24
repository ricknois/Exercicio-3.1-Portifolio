let numbers = [5, 9, 19, 70, 8, 100, 35, 27];
let element = Number.POSITIVE_INFINITY;
for (let index = 0; index < numbers.length; index++) {
    if (element > numbers[index]) {
        element = numbers[index]
    }
}
console.log(element);