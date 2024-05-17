let ipNumber1 = document.querySelector('#ipNumber1');
let ipNumber2 = document.querySelector('#ipNumber2');
let ipNumber3 = document.querySelector('#ipNumber3');
let btMedia = document.querySelector('#btMedia');
let vlResultadoMedia = document.querySelector('#vlResultadoMedia');
let btMediaPonderada = document.querySelector('#btMediaPonderada');
let vlResultadoMediaPonderada = document.querySelector('#vlResultadoMediaPonderada');
let btSomarMedias = document.querySelector('#btSomarMedias');
let vlSomaMedias = document.querySelector('#vlSomaMedias');
let btMediaMedias = document.querySelector('#btMediaMedias');
let vlMediaMedias = document.querySelector('#vlMediaMedias');
let resultado
let resultado2

function media(){
    let media1 = Number(ipNumber1.value);
    let media2 = Number(ipNumber2.value);
    let media3 = Number(ipNumber3.value);
    resultado = (media1 + media2 + media3)/3;
    vlResultadoMedia.textContent = String(resultado);
}

btMedia.onclick = function(){
    media();
}

function mediaPonderada(){
    let mediap1 = Number(ipNumber1.value);
    let mediap2 = Number(ipNumber2.value);
    let mediap3 = Number(ipNumber3.value);
    resultado2 = ((mediap1 * 3) + (mediap2 * 2) + (mediap3 * 5))/10; 
    vlResultadoMediaPonderada.textContent = String(resultado2)
}

btMediaPonderada.onclick = function(){
    mediaPonderada();
}

function somaDasMedias(){
    vlSomaMedias.textContent = String(resultado + resultado2);
}

btSomarMedias.onclick = function(){
    somaDasMedias();
}

function mediaDasMedias(){
    let resultado3 = (resultado + resultado2) / 2 ;
    vlMediaMedias.textContent = String(resultado3)
}

btMediaMedias.onclick = function(){
    mediaDasMedias();
}