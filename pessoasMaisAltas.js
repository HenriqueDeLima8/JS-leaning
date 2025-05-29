class Pessoa{
    constructor(nome,idade,altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}



function PessoasMaisAltas(pessoas){
    let pessoasMaiores = [
        new Pessoa("",0,0),
        new Pessoa("",0,0),
        new Pessoa("",0,0),
    ];
    
    for(let i = 0; i < pessoas.length; i++){
                let numeroP;
                if(pessoasMaiores[0].altura <= pessoasMaiores[1].altura && pessoasMaiores[0].altura <= pessoasMaiores[2].altura){
                    numeroP = 0;
                } else if(pessoasMaiores[1].altura <= pessoasMaiores[0].altura && pessoasMaiores[1].altura <= pessoasMaiores[2].altura){
                    numeroP = 1;
                } else if(pessoasMaiores[2].altura <= pessoasMaiores[0].altura && pessoasMaiores[2].altura <= pessoasMaiores[1].altura){
                    numeroP = 2;
                }
                
                if(pessoas[i].altura > pessoasMaiores[numeroP].altura){
                    pessoasMaiores[numeroP] = pessoas[i];
                }
     
        }
    pessoasMaiores.sort((a, b) => b.altura - a.altura);
    return pessoasMaiores;
}

const quantidade = Number(prompt("Quantas pessoas você quer inserir?"));
let grupo = [];

for (let i = 0; i < quantidade; i++) {
    const nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    const idade = Number(prompt(`Digite a idade de ${nome}:`));
    const altura = Number(prompt(`Digite a altura de ${nome} (em cm):`));

    grupo.push(new Pessoa(nome, idade, altura));
}


const resultado = PessoasMaisAltas(grupo)
    .map(p => `${p.nome} - ${p.idade} anos - ${p.altura} cm`)

alert("As 3 pessoas mais altas são:\n\n" + resultado);