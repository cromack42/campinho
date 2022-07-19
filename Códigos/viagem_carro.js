let rs = require ('readline-sync');

let dist = parseInt(rs.question('Digite a distancia a percorrer:'))
let velo = parseInt(rs.question('Digite a velocidade da viagem:'))
let temp = parseInt(rs.question('O tempo de viagem e de aproximadamente:'))

if (velo + dist === temp)
    console.log('O tempo de viagem e de aproximadamente:', dist + velo === temp,'km/h')