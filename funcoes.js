"use strict";
function somar(num1, num2) {
    let soma = num1 + num2;
    console.log("A soma é: " + soma);
}
function media(num1, num2, num3, num4, num5) {
    let media = (num1 + num2 + num3 + num4 + num5) / 5;
    console.log("A média é: " + media);
}
function imc(peso, altura) {
    if (altura === 0) {
        console.log('Aí não, Daniel... não pode dividir por 0!');
    }
    else {
        let imc = peso / (altura ** 2);
        console.log("O IMC é: " + imc);
    }
}
