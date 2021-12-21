function callback(nome){
    console.log("Bem vindo " + nome + "!");
}
function imprimir(callback){
    let nome = prompt("Qual o seu nome? ");
    callback(nome);
}