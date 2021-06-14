function Carro(velocidadeMaxima =200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelarar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta 

        }else{
            velocidadeAtual = velocidadeMaxima
        }
       
    }

    //medoto publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelarar()
console.log(uno.getVelocidadeAtual())

const ferrare = new Carro(350, 20)
ferrare.acelarar()
ferrare.acelarar()
ferrare.acelarar()
console.log(ferrare.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrare)