let valor // nao inicializa
console.log(valor) // valor undefined

valor = null // ausencia de valor, sem referencia de memoria
console.log(valor)

//console.log(valor.toString())// nao faca isso, erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)

console.log(produto)