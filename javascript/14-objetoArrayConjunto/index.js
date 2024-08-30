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

let videoGame = {
    nome: 'xbox',
    valor: 3000,
    jogos: [
        {nome: 'final fantasy'},
        {nome: 'fallout'}
    ]
}

let jogos3 = {
    nome: 'fifa',
    classificacao: 'mais 18'
}
videoGame.jogos.push(jogos3);
console.log(videoGame);