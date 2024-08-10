/*if(true){
    const mensagem = 'ola';
    console.log(mensagem)
}
console.log(mensagem);*/

// escopo de função
/*function falar(){
    var mensagem = 'olá Mundo!'
    console.log(mensagem)
}
falar();
console.log(mensagem);*/

function falar(){
    var mensagem = 'olá Mundo!'
    console.log(mensagem)
    function falarOutraCoisa(){

    }
    falarOutraCoisa()
     console.log(falarOutraCoisa)
}
falar();
console.log(falarOutraCoisa);
