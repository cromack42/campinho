let rs = require ('readline-sync');

let numero = rs.questionInt("Digite qualquer numero inteiro: ");
  
  if (numero % 2 === 0) {
    console.log("numero" ,numero ,"e par");
} else {
    console.log("numero" ,numero ,"e impar");
}