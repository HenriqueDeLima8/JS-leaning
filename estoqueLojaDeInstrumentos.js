class Instrumento {
    constructor(nome, tipo, valor){
        this.nome = nome,
        this.tipo = tipo,
        this.valor = valor
    }
}
function filtrarPorTipoDisponivel(instrumentos, tipoInstrumento){
    let nomeInstrumentosDoTipo = [];
    for(let i = 0; i < instrumentos.length;i++){
        if(instrumentos[i].tipo === tipoInstrumento){
            nomeInstrumentosDoTipo.push(instrumentos[i].nome);

        }

    }
    return nomeInstrumentosDoTipo;

}

// Lista de produtos

const estoque = [
    new Instrumento("Violão Yamaha", "cordas", 1200),
    new Instrumento("Guitarra Stratocaster", "cordas", 2500),
    new Instrumento("Bateria Pearl", "percussão", 5000),
    new Instrumento("Pandeiro", "percussão", 150),
    new Instrumento("Flauta Doce", "sopro", 200),
    new Instrumento("Trompete", "sopro", 3200),
];

// Teste
console.log(filtrarPorTipoDisponivel(estoque, "cordas"));
console.log(filtrarPorTipoDisponivel(estoque, "sopro"));
console.log(filtrarPorTipoDisponivel(estoque, "percussão"));