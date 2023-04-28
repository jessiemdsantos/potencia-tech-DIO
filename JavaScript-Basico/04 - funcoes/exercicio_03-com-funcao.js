/*
    Refazendo o exercicio, agora utilizando funções:
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function calcularCondicaoDePagamento(precoProduto, formaDePagamento) {
    if (formaDePagamento === "1") {
        return precoProduto -= (precoProduto * 0.10)
    } else if (formaDePagamento === "2") {
        return precoProduto -= (precoProduto * 0.15)
    } else if (formaDePagamento === "3") {
        return precoProduto
    } else {
        return precoProduto += (precoProduto * 0.10)
    }
}

function main(){
    console.log(`Total a pagar = RS ${calcularCondicaoDePagamento(100, '3')}`)
}

main()