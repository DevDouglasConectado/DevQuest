let cliente = {
    nome: 'Ricardo',
    ultimoPedido:{
        produto: 'xbox',
        valor:3000,
        jogos: [
            { nome: 'Fifa'},
            { classificacao: 'Livre'}
        ]

    }
}
console.log(cliente.ultimoPedido.jogos[0].nome)
console.log(cliente.ultimoPedido.jogos[1].classificacao)
console.log(cliente);