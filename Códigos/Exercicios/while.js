let rs = require('readline-sync')

let numeroFatorial = rs.question('Insira o numero para calcular o fatorial: ')

let resultado = 1

while(numeroFatorial > 1){ // inicio do loop
    resultado = numeroFatorial * resultado // primeira instrução
    numeroFatorial = numeroFatorial - 1// segunda instrução
    if(numeroFatorial > 1){
    }
}
console.log(resultado)