import dados from 'readline-sync';

let valor_devido = dados.question("Informe o valor da divida: ");
let dias_atraso = dados.question("Informe os dias em atraso: ");


if(dias_atraso >= 1 && dias_atraso <=15){
    let juros = (valor_devido / 100) * 5;
    let taxa_juros = 5
    let valortotal = Number(valor_devido) + Number(juros);
    console.log("Valor original da dívida: " + valor_devido);
    console.log("Dias atrasados: " + dias_atraso);
    console.log("Taxa de juros: " + taxa_juros + "%");
    console.log("Valor total com juros: " + valortotal);
}else if (dias_atraso > 15){
    let juros = (valor_devido / 100) * 10;
    let taxa_juros = 10
    let valortotal = Number(valor_devido) + Number(juros);
    console.log("Valor original da dívida: " + valor_devido);
    console.log("Dias atrasados: " + dias_atraso);
    console.log("Taxa de juros: " + taxa_juros + "%");
    console.log("Valor total com juros: " + valortotal);

}else if(dias_atraso == 0){
    console.log("Você está em dia!");
}
else if(valor_devido == 0){
    console.log("O valor devido deve ser maior que 0.");
} 
else{
    console.log("O valor devido deve ser maior que 0.");
}

