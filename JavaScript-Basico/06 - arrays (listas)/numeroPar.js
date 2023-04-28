/* 
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

const numero = [1, 4, 5, 6, 8, 11, 12]

for(i = 0; i < numero.length; i ++){
    let isPar = numero[i] % 2 == 0
    if (isPar){
        console.log(numero[i])
    }
}