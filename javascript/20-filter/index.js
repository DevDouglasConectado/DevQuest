let pessoas=[
    {nome:'Roberto', idade:33},
    {nome:'Ricardo', idade:33},
    {nome:'Raphael', idade:27},
]

/*let pessoasComIdadeDe33Anos = []
for(let i =0; i < pessoas.length;i++){
    if(pessoas[i].idade===33){
        pessoasComIdadeDe33Anos.push(pessoas[i])
    }
}*/
/*let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoas){
    return pessoas.idade === 33
})*/
let pessoasComIdadeDe33Anos = pessoas.filter((pessoas)=>{
    return pessoas.idade === 33
})

console.log(pessoasComIdadeDe33Anos)