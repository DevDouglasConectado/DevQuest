let ordens = [
    {cliente: 'Roberto', tipo: 'compra', quantidade:56, ativo: 'NFLX34'},
    {cliente: 'Ricardp', tipo: 'compra', quantidade:76, ativo: 'AAPL34'},
    {cliente: 'Raphael', tipo: 'venda', quantidade:21, ativo: 'GOGL34'}
]
/*let quantidadeDeOrdens = 0
for(let i = 0; i < ordens.length; i++){
    quantidadeDeOrdens += ordens[i].quantidade
}

console.log(quantidadeDeOrdens)*/

let quantidadeDeOrdens = ordens.reduce(function(somadasOrdens, ordem){
    console.log('Ordem: ',somadasOrdens, ordem)
   return somadasOrdens + ordem.quantidade
},0);

console.log(quantidadeDeOrdens)