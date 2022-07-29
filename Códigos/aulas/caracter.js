let rs = require('readline-sync')
let palavra = rs.question('Insira uma palavra: ')
let tamanhoPalavra = palavra.length

for(let i = 0; i < tamanhoPalavra; i = i + 1){
      console.log(palavra.charAt(i))
}