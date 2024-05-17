let ipNumero1 = document.querySelector('#ipNumero1');
let ipNumero2 = document.querySelector('#ipNumero2');
let ipNumero3 = document.querySelector('#ipNumero3');
let ipNumero4 = document.querySelector('#ipNumero4');
let btMenor = document.querySelector('#btMenor');
let vlMenor = document.querySelector('#vlMenor');

function menorNumero(){
    let numero1 = Number(ipNumero1.value);
    let numero2 = Number(ipNumero2.value);
    let numero3 = Number(ipNumero3.value);
    let numero4 = Number(ipNumero4.value);

    if (numero1<numero2<numero3<numero4){
        vlMenor.textContent = String(numero1);
    } if (numero2<numero1<numero3<numero4){
        vlMenor.textContent = String(numero2)
    } if (numero3<numero2<numero1<numero4){
        vlMenor.textContent = String(numero3)
    } else{
        vlMenor.textContent = String(numero4)
    }
    }

    btMenor.onclick = function(){
        menorNumero();
    }