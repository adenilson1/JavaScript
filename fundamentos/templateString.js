const nome = 'Rebeca'
const concatenacao = 'Ola '+ nome+'!'
const template = `
 Ola
 ${nome}!`
 console.log(concatenacao, template)

 //expressoes
 console.log(`1 + 1 = ${1 +1}`)

 //usando funcao
 const up = texto => texto.toUpperCase()
 console.log(`Ei... ${up(`cuidado`)}!`)
 