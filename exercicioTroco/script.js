let idValorPago = document.querySelector("#idValorPago");
let idValorProduto = document.querySelector("#idValorProduto");
let idValorTroco = document.querySelector("#idValorTroco");
let idTroco = document.querySelector("#idTroco")

function calcular(){
    let ValorPago = Number(idValorPago.value);
    let ValorProduto = Number(idValorProduto.value);
    let resultado = ValorPago - ValorProduto;
    idValorTroco.textContent = String(resultado);
}

idTroco.onclick = function(){
    calcular();
}