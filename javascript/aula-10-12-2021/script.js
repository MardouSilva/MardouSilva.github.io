const  dadosBaseCliente = {
    nome:"",
    compra:"",
    vencimento:"",
    juros:0,
}
let devedores=[];
function zerar(){
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("vencimento").value = "";
}

function escrever(){
    let ul;
    ul = document.createElement("ul");
    document.getElementById("devedores").appendChild(ul);
    ul.innerHTML = "<li>" + devedores[(devedores.length-1)].nome + "</li><li>Compra: " + devedores[(devedores.length-1)].compra + "</li><li>Vencimento: " +devedores[(devedores.length-1)].vencimento;
}

function mostrarResultado(pessoa){
    document.getElementById("devedores").innerHTML = "";
    let ul;
    ul = document.createElement("ul");
    document.getElementById("devedores").appendChild(ul);
    ul.innerHTML = "<li>" + pessoa.nome + "</li><li>Compra: " + pessoa.compra + "</li><li>Vencimento: " + pessoa.vencimento + "</li><li>Juros: " + pessoa.juros + "</li>";
}

function adicionar(){
    devedores.push(dadosBaseCliente);
    devedores[(devedores.length-1)].nome = document.getElementById("nome").value;
    devedores[(devedores.length-1)].compra = Number(document.getElementById("valor").value);
    devedores[(devedores.length-1)].vencimento = new Date(document.getElementById("vencimento").value);
    escrever();
    zerar();
}

function quantDias(pessoa){
    let dataAtual, dataVencida, valor, dias;
    dataAtual = new Date(document.getElementById("atual").value);
    console.log(dataAtual)
    valor = dataAtual.getTime() - pessoa.vencimento.getTime();
    dias = valor/(1000 * 3600 * 24);
    return dias;
}

function juros(pessoa){
    let dias, valor;
    dias = quantDias(pessoa);
    valor = pessoa.compra * 0.01 * 2 + (dias * 0.1);
    valor.toFixed(2);
    pessoa.juros = valor;
    return valor;
}

function calcular(){
    let total = 0, valores = devedores.map(juros);
    devedores.forEach(mostrarResultado);
    for(let i=0;i<valores.length;i++){
        total += valores[i];
    }
    document.getElementById("totalJuros").innerHTML = "Total de juros a receber: R$ " + total;
}