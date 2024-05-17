let ipValor = document.querySelector('#ipValor');
let btReajuste = document.querySelector('#btReajuste');
let vlReajustado = document.querySelector('#vlReajustado');

function reajustarValor(){
    let valor1 = Number(ipValor.value); 
    let valor2 = valor1 * 1/100 ;
    let resultado = valor1 + valor2;
    vlReajustado.textContent = String(resultado);
}

btReajuste.onclick = function(){
    reajustarValor();
}