//Armazando uma funcao denntro de uma variavael

const imprimiSoma = function (a, b){
    console.log(a + b)
}

imprimiSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a ,b) => {
    return a + b 
}

console.log(soma(2 ,3))

//retorno implicito
const subtracao = (a, b) => {a - b}
console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal !!')