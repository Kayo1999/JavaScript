import dados from 'readline-sync';

let aluno_academia = {
    id: dados.question("Digite seu id: "),
    nome: dados.question("Digite seu nome: "),
    altura: dados.question("Digite sua altura: "),
    peso: dados.question("Digite seu peso: ")
};

let nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
let altura_aluno = aluno_academia.altura;

let imc_aluno = Number(peso_aluno )/ (Number(altura_aluno) * Number(altura_aluno))

console.log("O IMC do aluno é de: " + imc_aluno);

if ( imc_aluno < 18.5 ) {
    console.log("O aluno " + nome_aluno + " está abaixo do peso");
} else if( imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + nome_aluno + " está com o peso normal");
} else {
    console.log("O aluno " + nome_aluno + " está acima do peso");
}
