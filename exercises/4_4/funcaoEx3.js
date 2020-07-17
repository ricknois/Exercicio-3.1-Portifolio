function indiceMaioValor(array) {
    let indice = 0
    for (let key in array) {
        if (array[indice] > array[key]) {
            indice = key;
        }
    }
    return indice;
}
console.log(indiceMaioValor([2, 4, 6, 7, 10, 0, -3]))
