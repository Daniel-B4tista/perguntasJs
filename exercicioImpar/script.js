let ipNumero = document.querySelector('#ipNumero');
let btImpar = document.querySelector('#btImpar');

function numeroImpar(){
    let numero = Number(ipNumero.value);

    if(numero % 2 === 0){
        alert('Par')
    } 
    if(numero % 2 === 1){
        alert('Impar')
    }
}

btImpar.onclick = function(){
    numeroImpar();
}

