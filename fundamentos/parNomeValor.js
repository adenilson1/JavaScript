// Par nome / valor

const saudacao = 'Opa' // contexto Léxico 1 ( local fisico foi definido sua variavel)
function exec (){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome(chave)/valor
const cliete = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua A',
        numero:123
    }          
}

console.log(saudacao)
console.log(exec())
console.log(cliete)