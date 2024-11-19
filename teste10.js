/*let nome = "     kayo     ";
let nome1 = "kayo";

if(nome.trim() == nome1.trim()){

    console.log("Os nome são iguais.");
} else{
   console.log("Os nome são diferentes.")
};*/
//----------------------------------------

/*let label = "Email: "
let email = "Petotrans2012@gmail.com";
console.log( label.padEnd(20, ' ') + email);*/
//------------------------------------------------

/*let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade";
let valor_grau = "Ensino médio completo";

console.log(`${label_aluno.padStart(20, " ")} : ${valor_aluno}  `);
console.log(`${ label_grau.padEnd(20, ' ') } : ${valor_grau}`);
console.log( label_grau.padEnd(60, ' ') + valor_grau );
*/
//--------------------------------------------------------

/*let texto = `O Rio de Janeiro é uma das cidades mais bonitas do mundo!
 Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer.
 Quem vive nessa cidade é muito privilegiado!`;

let resultado = texto.replace("Rio de Janeiro", "RJ");

console.log(resultado);*/

//------------------------------------------------------------

/*let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if( tamanho > 100 ){

    resumo = conteudo.substring(0, 97);
    resumo += "...";

} else {

    resumo = conteudo;

}

console.log(resumo); */

//------------------------------------------------------------

/*let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario)*/

//----------------------------------------------------------------------

let nome_completo = "Ana Mendes da Silva";

let array = nome_completo.split(" ");

let nome = array[3];

console.log("Olá " + nome + ", seja bem vindo(a)");