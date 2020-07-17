function indiceMaioValor(array) {
    let nomeMaior = "";
    for (let key in array) {
        let nome = array[key];
        if (nomeMaior.length < nome.length) {
            nomeMaior = array[key];
        }
    }
    return nomeMaior;
}
console.log(indiceMaioValor(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
