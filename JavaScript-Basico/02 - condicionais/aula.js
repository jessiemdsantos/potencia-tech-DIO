
const numero = 4

if (numero % 2 === 0){
    console.log(`${numero} é par!`)
}else {
    console.log(`${numero} é ímpar!`)
}


const numeroDivisivelPor5 = numero % 5 === 0

if(numero === 0){
    console.log("divisão inválida")
} else if (numeroDivisivelPor5){
    console.log("É divisivel por 5")
}else{
    console.log("Não é divisivel por 5")
}