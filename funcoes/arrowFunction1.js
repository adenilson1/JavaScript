let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return está implicito

console.log(dobro(Math.PI))

let ola = function () {
    return "Ola"
}

ola = () => 'Ola' // forma padrao

ola =_=>'Ola' // possui paramtro, mas é ignorado

console.log(ola())







