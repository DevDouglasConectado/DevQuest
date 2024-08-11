const calcularAnoDeNascimento = function(idade,mesDeNascimento, imprir){
    const mesAtual = 10;
    let anoDeNascimento = 2024 - idade;
    if(mesDeNascimento > mesAtual) anoDeNascimento --;
    imprir(anoDeNascimento);
}
let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('Seu ano de nascimnto é: ' + anoDeNascimento)
}
calcularAnoDeNascimento(32,3,imprimirAnoDeNascimento)
/*------------------------------------------------------------------*/

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}
let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(dobrar(3));