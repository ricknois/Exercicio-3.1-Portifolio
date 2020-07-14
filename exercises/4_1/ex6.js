var peca = "Peão"
if (peca.toLowerCase() === "rei") {
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
} else if(peca.toLowerCase() === "rainha"){
 console.log("Pode mover-se em qualquer direção quantas casas quiser")
} else if (peca.toLowerCase() === "torre") {
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
} else if (peca.toLowerCase() === "bispo"){
    console.log("O bispo move-se ao longo da diagonal");
} else if (peca.toLowerCase() === "cavalo") {
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
} else if (peca.toLowerCase() === "peão") {
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
} else{
    console.log("Erro, essa peça não existe");
}