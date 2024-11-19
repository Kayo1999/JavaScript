import dados from 'readline-sync';

console.log("Bem vindo ao conversor de milhas para km!");
let milhas = dados.question("Digite o valor em milhas: ");
var km = (milhas / 0.62137) .toFixed(2);

console.log(milhas + " Milhas equivale a " + km + " kilometros!");