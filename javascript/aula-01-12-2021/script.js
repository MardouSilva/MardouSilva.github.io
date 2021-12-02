function escrever(valores, ordem){
    let novo, elemento = document.querySelector("section");
    novo = document.createElement("p");
    elemento.appendChild(novo);
    novo.innerHTML= ordem + ": " + valores[0] + ", " + valores[1] + ", " + valores[2] + ", " + valores[3] + " ";
}

function inverter(valores){
    let guardar;
    for(let i=0;i<2;i++){
        guardar = valores[3-i];
        valores[3-i] = valores[i];
        valores[i] = guardar;
    }
    escrever(valores, "Ordem Inversa");
}

function decrescente(valores){
    let maior;
    for(let i=0;i<(valores.length-1);i++){
        maior = valores[i];
        for(let j=i;j<(valores.length-1);j++){
            if(maior<valores[j]){
                maior = valores[j]
                valores[j] = valores[i];
                valores[i] = maior;
            }
        }
    }
    escrever(valores, "Ordem Decrescente");
}

function crescente(valores){
    let maior, guardar;
    for(let i=0;i<(valores.length-1);i++){
        maior = valores[i];
        for(let j=i;j<(valores.length-1);j++){
            if(maior<valores[j]){
                maior = valores[j]
                valores[j] = valores[i];
                valores[i] = maior;
            }
        }
    }
    for(let i=0;i<2;i++){
        guardar = valores[3-i];
        valores[3-i] = valores[i];
        valores[i] = guardar;
    }
    escrever(valores, "Ordem Crescente");
}

function organizar(){
    let numeros=[];
    for(let i=0;i<4;i++){
        numeros[i]= document.getElementById("numero"+(i+1)).value;
    }
    inverter(numeros);
    crescente(numeros);
    decrescente(numeros);
}