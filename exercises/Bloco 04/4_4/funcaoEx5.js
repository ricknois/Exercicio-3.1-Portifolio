
function maisRepetido(numeros) {
    let contr = 0;
    let idnum = 0;
    let contnumero = 0;


    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contnumero+= 1;
        }
      }
      if (contnumero > contr) {
        contr = contnumero;
        idnum = index
      }
      contnumero = 0
    }
    return numeros[idnum];
  }

  console.log(maisRepetido([2, 10, 2, 10, 8, 10, 3, 5 ,5 , 5]));