const pessoas = ['Roberto', 'Ricardo', 'Raphael1'];
console.log(...pessoas)

let pessoas1 = ['Roberto', 'Ricardo', 'Raphael'];
let pessoas2 = ['Pedro','joão', 'Paulo'];

pessoas1 = [...pessoas1, ...pessoas2]
console.log(pessoas1)

const pessoas3 = {nome:'Roberto', idade: 33}

const objetoClonado = {...pessoas3}
console.log(objetoClonado)
console.log(pessoas3)