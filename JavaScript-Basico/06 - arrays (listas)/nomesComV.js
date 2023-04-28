/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

const nomes = []

nomes.push('Vanessa')
nomes.push('Antonia')
nomes.push('Julio')
nomes.push('Venilton')

for (let i = 0; i < nomes.length; i++) {
    let comecaComV = nomes[i][0] === 'V';

    if(comecaComV){
        console.log(nomes[i])
    }
    
}