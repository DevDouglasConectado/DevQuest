
function adicionarComentario(){
    let inputComentario = document.getElementsByName('novo-comentario');

    let textoDigitado = inputComentario[0].value;
    
    /* id da div */
    let novosComentarios = document.getElementById('inserirTextos');

    novosComentarios.innerHTML = novosComentarios.innerHTML + 
    `<p>Novo comentário ${textoDigitado}</p>`
}