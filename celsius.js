import dados from 'readline-sync';

console.log("Bem vindo ao conversor de K para C! ");

var cel = dados.question("Digite a temperatura em celsius: ");
var kel = (Number(cel) + Number(273)).toFixed(2);
console.log("A temperatura convertida para kelvin é de: " + kel);


