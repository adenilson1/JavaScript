const imprirResultado = function (nota){
    if (nota >= 7){
        console.log('Aprovado !!')
    }else{
        console.log('Recuperação!')
    }
}

imprirResultado(8)
imprirResultado(4)

imprirResultado('Epa') //cuidado, so pode ter valores inteiros