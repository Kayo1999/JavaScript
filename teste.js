import dados from 'readline-sync';

let numero = dados.question("Informe o número da tabuada: ");

let multiplicador = 0;

while(multiplicador <= 10){
    let resultado = numero * multiplicador;
    console.log(numero + " vezes " + multiplicador + " = " + resultado);
    multiplicador++; 
}