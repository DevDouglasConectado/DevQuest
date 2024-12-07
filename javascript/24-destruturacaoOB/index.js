let pessoa = {nome: 'Roberto',  sobrenome: 'Dias', idade: 33}; 

let { nome: nomepropio, idade, sobrenome} = pessoa
console.log(nomepropio);
console.log(idade);
console.log(idade);
/*Destrutura de array */

const numeros = [1,2,3];
const [um, dois, tres] = numeros;
console.log(um)