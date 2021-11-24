// Adquuirindo nome da pessoa
function capturar(){
    let avaliador= document.getElementById("nome").value;
    let avaliacao= document.getElementById("nota").value;
    document.getElementById("botao").style.backgroundColor="#ff0000"
    mostrar(avaliador,avaliacao)
}
function mostrar(pessoa,valor){
    document.getElementById("resultado").innerHTML="<h2>Obrigado pela avaliação "+valor+" "+pessoa+"!</h2>"
}