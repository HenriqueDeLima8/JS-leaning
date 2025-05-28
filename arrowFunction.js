const _velocidadeMedia = (distancia, tempo) => {

    let velocidadeMedia = distancia / tempo;

console.log("Arrow Function ---->");
console.log("A Velocidade Média foi de " + velocidadeMedia + " metros por minuto");

};

let numero1 = parseFloat(prompt("Digite a distancia (metros)"));
let numero2 = parseFloat(prompt("Digite o tempo (minutos)"));

_velocidadeMedia(numero1, numero2);
