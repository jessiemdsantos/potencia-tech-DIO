class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const jessica = new Pessoa('Jessica', 30);
jessica.descrever()
