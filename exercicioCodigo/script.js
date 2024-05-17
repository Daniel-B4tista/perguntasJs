let ipNumero = document.querySelector('#ipNumero');
let btPesquisar = document.querySelector('#btPesquisar');
let ferramenta = document.querySelector('#ferramenta');

function codigo(){
    let numero = Number(ipNumero.value);
    let parafuso = Parafuso;
    let porca = Porca;
    let prego = Prego;

    if(numero = 1){
        ferramenta.textContent = String(parafuso);
    }
    if(numero = 2){
        ferramenta.textContent = String(porca);
    }
    if(numero = 3){
        ferramenta.textContent = String(prego);
    } else {
        ferramenta.textContent = Diversos
    }
}

btPesquisar.onclick = function(){
    codigo();
}