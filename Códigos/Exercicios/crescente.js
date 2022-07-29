/* Escreva um programa para ler 3 valores inteiros (considere que não
serão lidos valores iguais) e escrevê-los em ordem crescente.*/

let rs = require ('readline-sync');

const valor = rs.questionInt('Escreva seu primeiro valor: ')
const valor1 = rs.questionInt('Escreva seu segundo valor: ')
const valor2 = rs.questionInt('Escreva seu terceiro valor: ')

var numeros = [valor, valor1, valor2];

numeros.sort(function(a, b){
    if (a > b) return 1;
    
    if (a < b) return -1;

    return 0;
});

console.log(numeros);