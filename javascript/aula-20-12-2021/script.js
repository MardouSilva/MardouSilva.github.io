var intervalo = null;
let numeros = [];
for(let i=1;i<=60;i++){
    numeros.push(i);
}
function preencher(){
    for(let i=1;i<=60;i++){
        numeros[i-1]=i;
    }
    document.querySelector("h2").innerHTML="Resultado:"
}

function sorteio(){
    let sorteado;
    sorteado = parseInt(Math.random() * 60);
    if(numeros[sorteado - 1] !== true){
        numeros[sorteado - 1] = true;
        document.querySelector("h2").innerHTML += " " + sorteado;
        pare++;
        if(pare===6){
            pare=0;
            clearInterval(intervalo);
        }
        return;
    }
    else{
        return sorteio();
    }
}

let pare = 0;
function sortear(callback){
    preencher();
    intervalo = setInterval(callback, 1000);
}
