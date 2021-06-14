// clouser é um escopo criado quando uma funçao é declada 
// Esse escopo que permite a função acessar e manipular a variáveis externas à função

//Contexto léxico em ação
const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())




