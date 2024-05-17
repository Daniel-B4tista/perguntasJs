let ipValor = document.querySelector('#ipValor');
let ipPeso = document.querySelector('#ipPeso');
let btCalcular = document.querySelector('#btCalcular');
let vlFinal = document.querySelector('#vlFinal');

function multiplicarValores(){
    let valor1 = Number(ipValor.value);
    let valor2 = Number(ipPeso.value);
    let resultado = valor1 * valor2;
    vlFinal.textContent = String(resultado);
}

btCalcular.onclick = function(){
    multiplicarValores();
}


