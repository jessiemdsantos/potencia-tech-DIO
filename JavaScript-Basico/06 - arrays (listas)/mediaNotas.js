/*
) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]

*/

const mediaNotas = [2, 7, 3, 8, 10, 4]

console.log('Medias em recuperação: ')
for(i = 0; i < mediaNotas.length; i++){
    const recuperacao = mediaNotas[i] < 5
    if(recuperacao){
        console.log(mediaNotas[i])
    }
}