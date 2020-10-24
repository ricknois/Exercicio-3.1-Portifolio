let custo = 1;
let venda = 3;
if (custo >= 0 && venda >= 0) {
    let custoTotal = venda - custo;
    console.log((custoTotal)*1000 *0.20);
} else {
    console.log("Erro");
}
