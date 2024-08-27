let frutas = ['banana', 'maçã', 'laranja','pêra']
let frutasTamanho = frutas.length

//for(let i = 0; i < frutasTamanho; i++){
  //  console.log('frutas: ' + frutas[i]);
//}
//frutas.forEach(function(item){
  //  console.log('Frutas: ' + item)
//})
frutas.push('manga')
console.log(frutas);

frutas.pop();
console.log(frutas)

frutas.shift();
console.log(frutas)
let posicaolaranjas = frutas.indexOf
('laranja');
console.log(posicaolaranjas);

frutas.unshift('Morango');
console.log(frutas)

let posicaolaranja = frutas.indexOf
('laranja');
console.log(posicaolaranja);