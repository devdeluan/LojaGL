var cd1=0.0;
function subtotal1(qtd, valor){
    cd1=parseFloat(qtd)*parseFloat(valor);
    document.getElementById('txtSub1').value=cd1.toFixed(2);
}
var cd2=0.0;
function subtotal2(qtd, valor){
    cd2=parseFloat(qtd)*parseFloat(valor);
    document.getElementById('txtSub2').value=cd2.toFixed(2);
}
var cd3=0.0;
function subtotal3(qtd, valor){
    cd3=parseFloat(qtd)*parseFloat(valor);
    document.getElementById('txtSub3').value=cd3.toFixed(2);
}
var cd4=0.0;
function subtotal4(qtd, valor){
    cd4=parseFloat(qtd)*parseFloat(valor);
    document.getElementById('txtSub4').value=cd4.toFixed(2);
}
var cd5=0.0;
function subtotal5(qtd, valor){
    cd5=parseFloat(qtd)*parseFloat(valor);
    document.getElementById('txtSub5').value=cd5.toFixed(2);
}
var cd6=0.0;
function subtotal6(qtd, valor){
    cd6=parseFloat(qtd)*parseFloat(valor);
    document.getElementById('txtSub6').value=cd6.toFixed(2);
}
var cd7=0.0;
function subtotal7(qtd, valor){
    cd7=parseFloat(qtd)*parseFloat(valor);
    document.getElementById('txtSub7').value=cd7.toFixed(2);
}
var cd8=0.0;
function subtotal8(qtd, valor){
    cd8=parseFloat(qtd)*parseFloat(valor);
    document.getElementById('txtSub8').value=cd8.toFixed(2);
}
var cd9=0.0;
function subtotal9(qtd, valor){
    cd9=parseFloat(qtd)*parseFloat(valor);
    document.getElementById('txtSub9').value=cd9.toFixed(2);
}
var cd10=0.0;
function subtotal10(qtd, valor){
    cd10=parseFloat(qtd)*parseFloat(valor);
    document.getElementById('txtSub10').value=cd10.toFixed(2);
}
function totalGeral(){
    total=cd1+cd2+cd3+cd4+cd5+cd6+cd7+cd8+cd9+cd10;
    document.getElementById('total').value=total.toFixed(2);
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}