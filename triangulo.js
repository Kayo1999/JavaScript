import dados from  'readline-sync';

console.log("Área do triângulo: \n");

let base = dados.question("Informe a base: ");
let altura = dados.question("Informe a altura: \n");

let area = (base * altura) / 2;

console.log("A área do triângulo é: " + area + "\n");

console.log("Você digitou a base: " + base);
console.log("Você digitou a altura: " + altura);
