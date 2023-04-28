function sayMyName(name) {
    console.log(`Olá, ${name}!`)
}


function verificaMaioridade(idade) {
    if (idade >= 18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}

console.log(verificaMaioridade(15))