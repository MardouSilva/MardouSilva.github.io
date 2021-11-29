let valorFinal;

function mostrar(){
    document.getElementById("pedido").removeAttribute("hidden");
}

function tipoPao(){
    let pao = document.querySelector('input[name="pao"]:checked').value;
    console.log(pao)
    if(pao === "pFrances"){
        valorFinal += 3,00;
        document.getElementById("pedidoPao").innerHTML="Pão Francês - R$ 3,00";
    }
    else if(pao === "pAustraliano"){
        valorFinal += 8,00;
        document.getElementById("pedidoPao").innerHTML="Pão Australiano - R$ 8,00" ;
    }
    else{
        valorFinal += 6,00;
        document.getElementById("pedidoPao").innerHTML="Pão Brioche - R$ 6,00";
    }
}

function tipoHamburguer(){
    let hamburguer = document.querySelector('input[name="hamburguer"]:checked').value;
    if(hamburguer === "cPicanha"){
        valorFinal += 13,00;
        document.getElementById("pedidoHam").innerHTML="Hamburguer de Picanha - R$ 13,00";
    }
    else if(hamburguer === "cCostela"){
        valorFinal += 10,00;
        document.getElementById("pedidoHam").innerHTML="Hamburguer de Costela - R$ 10,00";
    }
    else{
        valorFinal += 12,00;
        document.getElementById("pedidoHam").innerHTML="Hamburguer Vegano - R$ 12,00";
    }
}

function tipoSalada(){
    let alface, tomate;
    alface = document.getElementById("sAlface");
    tomate = document.getElementById("sTomate");
    console.log(alface)
    console.log(tomate)
    if(alface.checked  && tomate.checked){
        valorFinal += 3,00;
        document.getElementById("pedidoSal").innerHTML="Com Alface e Tomate - R$ 3,00";
    }
    else if(alface.checked){
        valorFinal += 1,50;
        document.getElementById("pedidoSal").innerHTML="Com alface - R$ 1,50";
    }
    else if(tomate.checked){
        valorFinal += 1,50;
        document.getElementById("pedidoSal").innerHTML="Com tomate - R$ 1,50";
    }
    else{
        document.getElementById("pedidoSal").innerHTML="Sem salada"
    }
}

function tipoQueijo(){
    let mussarela, prato, cheddar;
    mussarela = document.getElementById("qMussarela");
    prato = document.getElementById("qPrato");
    cheddar = document.getElementById("qCheddar");
    console.log(mussarela + prato + cheddar)
    if(mussarela.checked && prato.checked && cheddar.checked){
        valorFinal += 11,00;
        document.getElementById("pedidoQue").innerHTML="Queijos mussarela, prato e cheddar - R$ 11,00";
    }
    else if(mussarela.checked && prato.checked){
        valorFinal += 6,00;
        document.getElementById("pedidoQue").innerHTML="Queijos mussarela e prato - R$ 6,00";
    }
    else if(mussarela.checked && cheddar.checked){
        valorFinal += 8,00;
        document.getElementById("pedidoQue").innerHTML="Queijos mussarela e cheddar - R$ 8,00";
    }
    else if(prato.checked && cheddar.checked){
        valorFinal += 8,00;
        document.getElementById("pedidoQue").innerHTML="Queijos prato e cheddar - R$ 8,00";
    }
    else if(mussarela.checked){
        valorFinal += 3,00;
        document.getElementById("pedidoQue").innerHTML="Queijo mussarela - R$ 3,00";
    }
    else if(prato.checked){
        valorFinal += 3,00;
        document.getElementById("pedidoQue").innerHTML="Queijo prato - R$ 3,00";
    }
    else if(cheddar.checked){
        valorFinal += 5,00;
        document.getElementById("pedidoQue").innerHTML="Queijo cheddar - R$ 5,00";
    }
    else{
        document.getElementById("pedidoQue").innerHTML="Sem queijo";
    }
}
function imprimir(){
    valorFinal = 0;
    tipoPao();
    tipoHamburguer();
    tipoSalada();
    tipoQueijo();
    mostrar();
    document.getElementById("pedidoValor").innerHTML="Valor final = R$ "+valorFinal;
}