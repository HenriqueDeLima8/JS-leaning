const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const _velocidadeMedia = (distancia, tempo) => {
    let velocidadeMedia = distancia / tempo;
    console.log("Arrow Function ---->");
    console.log("A Velocidade Média foi de " + velocidadeMedia + " metros por minuto");
};

rl.question("Digite a distância (metros): ", (distancia) => {
    rl.question("Digite o tempo (minutos): ", (tempo) => {
        let numero1 = parseFloat(distancia);
        let numero2 = parseFloat(tempo);
        _velocidadeMedia(numero1, numero2);
        rl.close();
    });
});
