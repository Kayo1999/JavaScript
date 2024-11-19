let cursos_idiomas = [
    {nome: "inglês", preco: 2500, carga: 160},
    {nome: "Espanhol", preco: 1500, carga: 110},
    {nome: "Francês", preco: 3600, carga: 200},
    {nome: "Chinês", preco: 5500, carga: 400},
    {nome: "Alemão", preco: 3800, carga: 230}
];

for(let curso of cursos_idiomas){
    let nome = curso.nome;
    let preco = curso.preco;
    let carga = curso.carga;

    let precoaula = curso / carga;

    console.log("Nome do curso " + nome);
    console.log("Preço do curso R$" + preco + ",00");
    console.log("Carga horária do curso " + carga + " horas.");

    if(precoaula >= 15){
        console.log("Aula superior ou igual a R$15,00");
    } else{
        console.log("Aula inferior a R$15,00");
    }
    console.log("\n")
}