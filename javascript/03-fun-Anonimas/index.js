function somar(numero1,numero2){
    return numero1+numero2
}
let resultadoDaSoma = somar(12,2);
console.log(resultadoDaSoma);
//--------------------------------------------------------------
let resultadoDaSomaAnonima = function(numero1,numero2){
    return numero1+numero2
}
console.log(resultadoDaSomaAnonima(12,5))