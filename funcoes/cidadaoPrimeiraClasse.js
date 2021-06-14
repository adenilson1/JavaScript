//criar de forma literal
function fun1(){ }

//armazenar em uma variavel
const fun2 = function () {}

// armazenar em um array
const array = [function (a, b){return a + b}, fun1 , fun2]

console.log(array[0](2, 3))

//armazena em um atributo de objeto
const obj = {}
obj.falar = function () {return 'oi'}

console.log(obj.falar())

//Passar um funcao como parametro

function run(fun){
    fun()
}

return run(function(){console.log('Executando ...')})

//Um funcao pode retorna / conter uma funcao
function somar(a, b) {
    return function(c){
        console.log(a+ b +c)
    }
}

const cincoMais = somar(2, 3)
cincoMais(4)








