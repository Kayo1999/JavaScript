import dados from 'readline-sync';

let numero = dados.question("Informe o numero a ser multiplicado: ");
//let contador = 0

for(let contador = 0; contador <= 10; contador++){

    let resultado = numero * contador;

    console.log(numero + " vezes " + contador + " = " + resultado);
}