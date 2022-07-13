let rs = require ('readline-sync');

let senha = rs.questionInt("Digite sua senha: ");
    
if (senha === 1234){
        console.log("Acesso Permitido");
} else {
    console.log("Acesso Negado")
}