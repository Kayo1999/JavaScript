import dados from 'readline-sync';

console.log("Aplicção de juros: ");

let valor_juros;

let valor_devido = dados.question("Informe o valor devido: ");

if(valor_devido > 0){ 
    let dias_atraso = dados.question("Informe os dias em atraso: ");
    
    if(dias_atraso > 0){
        if(dias_atraso > 15){
            valor_juros = 10;
        }
        else{
            valor_juros = 5;
        }

        valor_devido = Number(valor_devido);
        dias_atraso = Number(dias_atraso);

        let total_juros = (valor_devido / 100) * valor_juros;
        let total_divida = valor_devido + total_juros;

        console.log("\n");
        console.log("Valor original da dívida: " + valor_devido);
        console.log("Dias atrasados: " + dias_atraso);
        console.log("Taxa de juros: " + valor_juros + "%");
        console.log("Valor total com juros: " + total_divida);


    }
    else{
        console.log("Você está em dia!");
    }
} 
else{
    console.log("O valor da dívida deve ser maior que 0.");
};
