//Criando variaveis
let valor1, valor2, final;

//Função para calculos
function calculo(tipo){
    //Pegando o valor dos operadores
    valor1 = document.getElementById("numero1").value;
    valor2 = document.getElementById("numero2").value;

    //Soma
    if(tipo===1){
        final = parseInt(valor1) + parseInt(valor2);
    }
    //Subtração
    else if(tipo===2){
        final = valor1 - valor2;
    }
    //Multiplicação
    else if(tipo===3){
        final = valor1 * valor2;
    }
    //Divisão
    else{
        final = valor1 / valor2;
    }
    //Retornando resultado e zerando os operadores
    document.getElementById("resultado").innerHTML = "Resultado = " + final;
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}
