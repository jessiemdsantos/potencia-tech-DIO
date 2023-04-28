/* 
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKM = gastoMedioPorKM
    }
    calcularGasto(distancia, precoCombustivel) {
        return precoCombustivel * distancia * this.gastoMedioPorKM;
    }
}
const tesla = new Carro('Tesla', 'prata', 1 / 10)

console.log(tesla.calcularGasto(100, 5.57))