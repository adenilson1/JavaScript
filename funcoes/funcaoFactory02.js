// Fctory criar produto

function criarProduto(nome, preco){
    return{
        nome ,
        preco,
        desconto : 0.1
    }
}

console.log(criarProduto('Notebook', 1500.45))
console.log(criarProduto('iPad', 156.45))