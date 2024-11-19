import dados from 'readline-sync';

let nome = dados.question("Digite seu nome: ");
let altura = dados.question("Digite sua altura: ");
let peso = dados.question("Digite seu peso: ");

let imc = (peso / (altura * altura));

console.log("Olá " + nome + ", seu imc é de: " + imc);