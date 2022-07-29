
 /*
 1. Elabore um algoritmo que receba dois números e
  determine qual é o maior entre eles, se os números forem iguais, 
 mostre uma mensagem no console "Os números são iguais"
 */

 let rs = require ('readline-sync');

let num = parseInt(rs.question('Digite um numero:'))
let num1 = parseInt(rs.question('Digite outro numero:'))

if (num > num1){
    console.log('Esse é o maior numero', num)
} 

else if (num === num1){
    console.log('Os numeros são iguais')
}