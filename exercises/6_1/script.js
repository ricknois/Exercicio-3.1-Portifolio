const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
const ids = ["name","email","cpf","endereco","cidade","estado","resC","cargo","descCar","dateIni"]


function createState() {
  const selectOption = document.querySelector('#estado');
  for (let i = 0; i < states.length; i += 1) {
    const createOption = document.createElement('option');
    createOption.innerHTML = states[i];
    createOption.setAttribute('value', states[i])
    selectOption.appendChild(createOption);
    
  }
}
function showDiv() {
  const divDados = document.querySelector('#dados')
  for (let index = 0; index < ids.length; index++) {
    const createDivDados = document.createElement('p')
    createDivDados.innerHTML = ids[index] +" "+document.getElementById(ids[index]);
    divDados.appendChild(createDivDados);
  }
}

