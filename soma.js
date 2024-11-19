import dados from 'readline-sync';
let n1 = dados.question ("Digite a primeira nota: ");
let n2 = dados.question ("Digite a segunda nota: ");
let n3 = dados.question ("Digite a terceira nota: ");
let n4 = dados.question ("Digite a quarta nota: ");
let media = (Number(n1) + Number(n2) + Number(n3) + Number(n4))/4;

console.log("A média final foi " + media);