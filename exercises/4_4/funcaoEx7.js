function verificaFimPalavra(palavra, palavra2) {
    palavra = palavra.split("");
    palavra2 = palavra2.split("");
    bool = true;
    for (let index = 0; index < palavra2.length; index+=1) {
      if (palavra[palavra.length-palavra2.length + index] != palavra2[index]) {
        bool = false;
      }
    }
    return bool;
  }
  console.log(verificaFimPalavra("trybe", "be"));
