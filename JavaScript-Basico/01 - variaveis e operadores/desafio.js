/* Faça um programa para calcular o valor gasto de uma viagem.
Você terá 3 variáveis, sendo elas:
- Preço do combustível;
- Valor médio de consumo de combustível do carro por KM;
- Distância em KM da viagem; 
Imprima o valor que será gasto para realizar essa viagem. */

const precoCombustivel = 5.79
const mediaConsumoPorKM = 10
const distanciaPorKm = 100

const total = (precoCombustivel * distanciaPorKm/ mediaConsumoPorKM)

console.log(`O valor necessário para realizar essa viagem é R$${total.toFixed(2)}.`)