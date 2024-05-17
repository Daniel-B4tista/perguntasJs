let ipNumero1 = document.querySelector('#ipNumero1');
let ipNumero2 = document.querySelector('#ipNumero2');
let btMaior = document.querySelector('#btMaior');   
let vlMaior = document.querySelector('#vlMaior');  

function maiorNumero(){
    let numero1 = Number(ipNumero1.value);
    let numero2 = Number(ipNumero2.value);
    
    if (numero1 > numero2){
        vlMaior.textContent = String(numero1);
    } else{
        vlMaior.textContent = String(numero2);
    }
}

btMaior.onclick = function(){
    maiorNumero();
}