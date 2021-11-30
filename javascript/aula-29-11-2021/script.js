function escrever(){
    let repeticoes, apagou, castigo, quadro, novo, final;
    castigo = Number(document.getElementById("punicao").value);
    quadro = document.getElementById("lousa");
    repeticoes= 1;
    apagou=0
    quadro.innerHTML="";
    while(repeticoes <= castigo){
        if(repeticoes%12 == 0){
            quadro.innerHTML="";
            apagou++;
        }
        novo = quadro.appendChild(document.createElement("p"));
        novo.innerHTML="Fazer o Milhouse chorar não é um projeto de ciências";
        repeticoes++;
    }
    document.getElementById("final").innerHTML = "A lousa foi apagada " + apagou + " vezes!";
}