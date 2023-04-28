/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoGasolina = 6.66
const precoEtanol = 5.79
const tipoCombustivel = "Gasolina"
const mediaConsumoPorKM = 10
const distanciaPorKm = 100

let totalGasto

if (tipoCombustivel === "Etanol") {
    totalGasto = (precoEtanol * distanciaPorKm / mediaConsumoPorKM)
} else {
    totalGasto = (precoGasolina * distanciaPorKm / mediaConsumoPorKM)
}



console.log(`O valor necessário para realizar esta viagem é R$ ${totalGasto.toFixed(2)}`)