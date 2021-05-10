function teste1(num){
    if(num > 7)
    console.log(num)
    console.log('final')//sempre será axecutado por está fora do laço
}

teste1(6)
teste1(8)

function test2 (num){
    if(num > 7);{// esse ';' tira o condicao, imprimindo o console. isso mostra que nao recomendo usar o '; 'no js
        console.log(num)
    }
}

test2(6)
test2(8)