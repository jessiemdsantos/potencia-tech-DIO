

const { gets, print } = require('./funcoes_aux')


const quantidadeDeEntradas = gets()
let maior = 0;


for (let i = 0; i < quantidadeDeEntradas; i++) {
    numerosSorteados = gets()
    if (numerosSorteados > maior) {
        maior = numerosSorteados;
    }
}

print(maior)


