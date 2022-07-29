/* As peras custam R$0,30 cada se forem compradas menos do que 12, e
R$0,25 se forem compradas 12 ou mais. Escreva um programa que leia
o número de peras compradas, calcule e escreva o valor total da compra. */


let rs = require ('readline-sync')

const quantidadePera = rs.questionInt("Quantas peras foram compradas? ")

let reais = quantidadePera * 0.3
    if (quantidadePera < 12) {
    console.log('O valor da sua compra é de R$:', parseFloat(reais)) 

}else { let desconto = quantidadePera * 0.25 
    console.log('O valor da sua compra foi ' , parseInt(desconto))
}


