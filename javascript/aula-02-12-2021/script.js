function conferirLinha(matriz){
    let vencedor;
    for(let i=0;i<3;i++){
        if(matriz[i][0].innerHTML=="O" && matriz[i][0].innerHTML=="O" && matriz[i][1].innerHTML=="O"){
            vencedor=matriz[i][0].innerHTML;
            document.getElementById("vez").innerHTML="O vencedor é " + vencedor;
        }
        else if(matriz[i][0].innerHTML=="X" && matriz[i][0].innerHTML=="X" && matriz[i][1].innerHTML=="X"){
            vencedor=matriz[i][0].innerHTML;
            document.getElementById("vez").innerHTML="O vencedor é " + vencedor;
        }
    }
}
function conferirColuna(matriz){
    let vencedor;
    for(let i=0;i<3;i++){
        if(matriz[0][i].innerHTML=="O" && matriz[0][i].innerHTML=="O" && matriz[1][i].innerHTML=="O"){
            vencedor=matriz[0][i].innerHTML;
            document.getElementById("vez").innerHTML="O vencedor é " + vencedor;
        }
        else if(matriz[0][i].innerHTML=="X" && matriz[0][i].innerHTML=="X" && matriz[1][i].innerHTML=="X"){
            vencedor=matriz[0][i].innerHTML;
            document.getElementById("vez").innerHTML="O vencedor é " + vencedor;
        }
    }
}
function conferirDiagonal(matriz){
    let vencedor;
    if(matriz[0][0].innerHTML==matriz[1][1].innerHTML && matriz[1][1].innerHTML==matriz[2][2].innerHTML && matriz[1][1].innerHTML!=="-"){
        vencedor=matriz[0][0].innerHTML;
        document.getElementById("vez").innerHTML="O vencedor é " + vencedor;
    }
    else if(matriz[0][2].innerHTML==matriz[1][1].innerHTML && matriz[1][1].innerHTML==matriz[2][0] && matriz[1][1].innerHTML!=="-"){
        vencedor=matriz[0][0].innerHTML;
        document.getElementById("vez").innerHTML="O vencedor é " + vencedor;
    }
}
function marcador(xo,matriz,linha,coluna){
    if(xo%2==0){
        matriz[linha][coluna].innerHTML="O";
        document.getElementById("vez").innerHTML="Vez de X";
    }
    else{
        matriz[linha][coluna].innerHTML="X";
        document.getElementById("vez").innerHTML="Vez de O";
    }
}
function reset(){
    let jogo=[];
    for(let i=0;i<3;i++){
        jogo[i]=document.querySelectorAll("#linha"+i+" button");
    }
    for(i=0;i<3;i++){
        for(let j=0;j<3;j++){
            jogo[i][j].innerHTML="-";
        }
    }
}
var conta = 0;
function marcar(linha,coluna){
    let jogo=[], contador=conta;
    for(let i=0;i<3;i++){
        jogo[i]=document.querySelectorAll("#linha"+i+" button");
    }
    marcador(contador,jogo,linha,coluna);
    conferirLinha(jogo);
    conferirColuna(jogo);
    conferirDiagonal(jogo);
    conta++;
}