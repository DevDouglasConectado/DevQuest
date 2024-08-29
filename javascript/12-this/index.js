let usuario = {
    nome: 'Ricardo',
    saudar: function(){
        console.log('this no contexto do metodo',
            this)

        console.log('this.nome no contexto do medoto',this.nome)
    }
}
usuario.saudar();