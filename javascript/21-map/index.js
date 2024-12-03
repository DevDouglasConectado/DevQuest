let pessoas = [
    {nome:'Roberto', idade:33},
    {nome:'Ricardo', idade:33},
    {nome:'Raphael', idade:27}
]

let nomeDasPessoass1 = []
for (let i = 0; i < pessoas.length; i++){
   nomeDasPessoass1.push(pessoas[i].nome)
}
console.log(nomeDasPessoass1);



/*let nomeDasPessoas = pessoas.map(function(pessoa){
     return pessoa.nome + " tem " + pessoa.idade + ' anos de idade';
})*/

let nomeDasPessoas = pessoas.map((pessoa) => pessoa.nome + " tem " + pessoa.idade + " anos de idade" )

console.log(nomeDasPessoas)