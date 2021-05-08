//Função sem retorno
function imprimiSoma(a, b){
    console.log(a + b)
}

imprimiSoma(2, 3)
imprimiSoma(2)
imprimiSoma(2, 10, 4, 4, 6, 7, 8)
imprimiSoma()

// Função com retorno
function soma(a, b = 1){// b com valo rpadrao
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())