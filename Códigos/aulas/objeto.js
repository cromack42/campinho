let xicara = new Object() //  intancando o objeto
xicara.peso = 0.2 // setando o valor 0.2 para a propriedade peso
xicara.forma = 'padrao' // setando o valor padrão para a propriedade forma
xicara.material = 'ceramica'
xicara.conteudo = 'cafe'

console.log(`A xicara possui: ${xicara.conteudo}`)
console.log(`O peso da xicara é : ${xicara.peso}`)

let xicara = new Object() // instancia o objeto
xicara['peso'] = 0.2
xicara['forma'] = 'padrao'
xicara['material'] = 'ceramica'
xicara['conteudo'] = 'cafe'

console.log(`A xicara possui: ${xicara['conteudo']}`)
console.log(`O peso da xicara e: ${xicara[`peso`]}`)


let meuObjeto = new Object()
string = 'MinhaString'
aleatorio = Math.random();
obj = new Object()

meuObjeto.tipo = 'Sintaxe de ponto'
meuObjeto["data de criação"] = 'String com espaço'
meuObjeto[string] = 'valor da string'
meuObjeto[aleatorio] = 'numero aleatorio'
meuObjeto[obj] = 'Objeto'
meuObjeto[""] = "Mesmo uma string vazia"

console.log(meuObjeto)

let meuCarro = new Object()

let nomeDaPropriedade = 'Empresa'
meuCarro[nomeDaPropriedade] = 'Ford'

nomeDaPropriedade = 'modelo'
meuCarro[nomeDaPropriedade] = 'Ford'

nomeDaPropriedade = 'modelo'
meuCarro[nomeDaPropriedade] = 'EcoSport'

console.log(meuCarro)