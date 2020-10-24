let inss;
let impostoRenda;
let salBruto = 3500.00;
if (salBruto <= 1556.94) {
  inss = salBruto * 0.08;
} else if (salBruto <= 2594.92) {
  inss = salBruto * 0.09;
} else if (salBruto <= 5189.82) {
  inss = salBruto * 0.11;
} else {
  inss = 570.88;
}
let salBase = salBruto - inss;
if (salBase <= 1903.98) {
  impostoRenda = 0;
} else if (salBase <= 2826.65) {
  impostoRenda = salBase * 0.075 - 142.80;
} else if (salBase <= 3751.05) {
  impostoRenda = salBase * 0.15 - 354.80;
} else if (salBase <= 4664.68) {
  impostoRenda = salBase * 0.225 - 636.13;
} else {
  impostoRenda = salBase * 0.275 - 869.36;
}

console.log("O salário é : " + (salBase - impostoRenda));