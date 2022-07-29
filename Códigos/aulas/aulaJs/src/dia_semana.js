let rs = require ('readline-sync');

let num = parseInt(rs.question('Digite o dia da semana (de 1 a 7):'))

switch(num){
    case 1: 
        console.log('domingo')
        break
    case 2: 
        console.log('segunda')
        break       
    case 3: 
        console.log('terça')
        break       
    case 4: 
        console.log('quarta')
        break       
    case 5: 
        console.log('quinta')
        break       
    case 6: 
        console.log('sexta')
        break       
    case 7: 
        console.log('sabado')
        break
    default:
        console.log('numero invalido')
        break       
}
    