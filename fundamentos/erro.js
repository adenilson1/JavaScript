function tratarErroElancar(erro){
   // throw new Error('.....')
   //throw 10
   //throw true
   //throw 'mensagem'
   throw {
       nome: erro.name,
       msg: erro.message,
       date: new Date
   }
}


function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.ToUpperCase() + '!!!')
    }catch (e){
        tratarErroElancar(e)
    }finally{
        console.log('final')
    }
    
}

const obj = {mome: 'Roberto'}

imprimirNomeGritado(obj)