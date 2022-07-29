let rs = require('readline-sync')

let numeroInseridos = []
let resultado = 0
for ( let i = 0; i < 100; i++){
    let numeroInserido = rs.questionInt(`Insira um numero ${i}: `)
    numeroInseridos.push(numeroInserido)
    resultado = resultado + numeroInserido
}
let imprimir = ""
for(let n = 0; n < numeroInseridos.length; n++){
    imprimir = `${imprimir} + ${numeroInseridos[n]}`
}
imprimir = imprimir + " = " + resultado
console.log(imprimir)
