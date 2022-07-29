// Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// iguais que o jogador A e B colocaram.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3
// Esse é um problema classicamente conhecido como Inner Join

let rs = require('readline-sync')

let jogadorA = rs.question('Qual o nome do seu jogador? \n')
let jogadorB = rs.question('Qual o nome do seu outro jogador? \n')

let listaTamanho = 5

let listajogadorA = []
let listajogadorB = []

console.log('- Primeiro jogador, digite 5 números de 1 a 10 -')

for(let i = 1; i <= listaTamanho; i++){
    let respostajogadorA = rs.question(`Numero ${i} : `)
    if(respostajogadorA > 0 && respostajogadorA <= 10){
        listajogadorA.push(respostajogadorA)
    }else{
        console.log('Numero nao e entre 1 e 10.')
        i--
    }

    }

console.log('- segundo jogador, digite 5 numeros de 1 a 10-')
for(let i = 1; i <= listaTamanho; i++){
    let respostajogadorB = rs.questionInt(`Numero ${i} : `)
    if (respostajogadorB > 0 && respostajogadorB <= 10){
        listajogadorB.push(respostajogadorB)
    }else{
        console.log('Numero nao e 1 e 10.')
        i--
    }
}

let numerosIguais = []
console.log (` ${jogadorA} digitou: ${listajogadorA} || ${jogadorB} digitou : ${listajogadorB}`)

for (let i = 0; i < listajogadorA.length; i++){
        for (let j = 0; j < listajogadorB.length; j++){
        if (listajogadorA[i] == listajogadorB[j])
            if(!numerosIguais.includes(listajogadorA))
                 numerosIguais.push(listajogadorA[i])
    }
}
console.log(`Os numeros iguais sao: ${numerosIguais}.`)