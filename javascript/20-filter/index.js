let pessoas=[
    {nome:'Roberto', idade:33},
    {nome:'Roberto', idade:33},
    {nome:'Roberto', idade:27},
]

let pessoasComIdadeDe33Anos = []
for(let i =0; i < pessoas.length;i++){
    if(pessoas[i].idade===33){
        pessoasComIdadeDe33Anos.push(pessoas[i])
    }
}