class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }
}

function alunosAprovados(turma) {
    let aprovados = [];

    for (let i = 0; i < turma.length; i++) {
        let aluno = turma[i];
        let somaDasNotas = 0;

        for (let nota of aluno.notas) {
            somaDasNotas += nota;
        }

        let media = somaDasNotas / aluno.notas.length;

        if (media >= 7) {
            aprovados.push(aluno.nome);
        }
    }

    return aprovados;
}

const turma = [
    new Aluno("Ana", [8, 7, 9]),
    new Aluno("Bruno", [6, 5, 6]),
    new Aluno("Carla", [7, 7, 7])
];

console.log(alunosAprovados(turma));  // ["Ana", "Carla"]

