//Declarando atributos dos carros [velMínima,velMáxima,derrapagem,voltasVencidas]
let pedro, juca, edna, premiacao;
pedro = [150,230,3,0];
juca = [120,260,5,0];
edna = [180,220,1,0];
premiacao = document.getElementById("podio");

//Para calcular a velocidade da volta
function velocidade(minima, maxima, derrapagem){
    let valor, retirar;
    valor = (Math.random() * (maxima - minima) + minima);
    retirar = valor * derrapagem * 0.01;
    return valor-derrapagem;
}
//Corrida Rapida
function rapida(){
    let voltas, velPedro, velJuca, velEdna;
    pedro[3]=0;
    edna[3]=0;
    juca[3]=0;
    for(voltas=0;voltas<10;voltas++){
        velPedro=velocidade(pedro[0],pedro[1],pedro[2]);
        velJuca=velocidade(juca[0],juca[1],juca[2]);
        velEdna=velocidade(edna[0],edna[1],edna[2]);
        if(velPedro>velEdna && velPedro>velJuca){
            pedro[3]++;
        }
        else if(velEdna>velPedro && velEdna>velJuca){
            edna[3]++;
        }
        else{
            juca[3]++;
        }
    }
    let final = document.createElement("ul");
    premiacao.appendChild(final);
    if(pedro[3]>edna[3] && pedro[3]>juca[3]){
        if(edna[3]>juca[3]){
            final.innerHTML="<h2>Corrida Rapida</h2><li>1º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>2º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>3º Lugar - Juca - " + juca[3] + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Corrida Rapida</h2><li>1º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>2º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>3º Lugar - Edna - " + edna[3] + "voltas vencidas</li>"
        }
    }
    else if(edna[3]>pedro[3] && edna[3]>juca[3]){
        if(pedro[3]>juca[3]){
            final.innerHTML="<h2>Corrida Rapida</h2><li>1º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>2º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>3º Lugar - Juca - " + juca[3] + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Corrida Rapida</h2><li>1º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>2º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>3º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li>"
        }
    }
    else{
        if(pedro[3]>edna[3]){
            final.innerHTML="<h2>Corrida Rapida</h2><li>1º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>2º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>3º Lugar - Edna - " + edna[3] + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Corrida Rapida</h2><li>1º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>2º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>3º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li>"
        }
    }
}

//Corrida Grande Prêmio
function premio(){
    let voltas, velPedro, velJuca, velEdna;
    pedro[3]=0;
    edna[3]=0;
    juca[3]=0;
    for(voltas=0;voltas<70;voltas++){
        velPedro=velocidade(pedro[0],pedro[1],pedro[2]);
        velJuca=velocidade(juca[0],juca[1],juca[2]);
        velEdna=velocidade(edna[0],edna[1],edna[2]);
        if(velPedro>velEdna && velPedro>velJuca){
            pedro[3]++;
        }
        else if(velEdna>velPedro && velEdna>velJuca){
            edna[3]++;
        }
        else{
            juca[3]++;
        }
    }
    let final = document.createElement("ul");
    premiacao.appendChild(final);
    if(pedro[3]>edna[3] && pedro[3]>juca[3]){
        if(edna[3]>juca[3]){
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>2º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>3º Lugar - Juca - " + juca[3] + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>2º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>3º Lugar - Edna - " + edna[3] + "voltas vencidas</li>"
        }
    }
    else if(edna[3]>pedro[3] && edna[3]>juca[3]){
        if(pedro[3]>juca[3]){
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>2º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>3º Lugar - Juca - " + juca[3] + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>2º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>3º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li>"
        }
    }
    else{
        if(pedro[3]>edna[3]){
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>2º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>3º Lugar - Edna - " + edna[3] + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>2º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>3º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li>"
        }
    }
}

//Corrida Enduro
function enduro(){
    let voltas, velPedro, velJuca, velEdna;
    pedro[3]=0;
    edna[3]=0;
    juca[3]=0;
    for(voltas=0;voltas<160;voltas++){
        velPedro=velocidade(pedro[0],pedro[1],pedro[2]);
        velJuca=velocidade(juca[0],juca[1],juca[2]);
        velEdna=velocidade(edna[0],edna[1],edna[2]);
        if(velPedro>velEdna && velPedro>velJuca){
            pedro[3]++;
        }
        else if(velEdna>velPedro && velEdna>velJuca){
            edna[3]++;
        }
        else{
            juca[3]++;
        }
    }
    let final = document.createElement("ul");
    premiacao.appendChild(final);
    if(pedro[3]>edna[3] && pedro[3]>juca[3]){
        if(edna[3]>juca[3]){
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>2º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>3º Lugar - Juca - " + juca[3] + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>2º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>3º Lugar - Edna - " + edna[3] + "voltas vencidas</li>"
        }
    }
    else if(edna[3]>pedro[3] && edna[3]>juca[3]){
        if(pedro[3]>juca[3]){
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>2º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>3º Lugar - Juca - " + juca[3] + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>2º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>3º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li>"
        }
    }
    else{
        if(pedro[3]>edna[3]){
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>2º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li><li>3º Lugar - Edna - " + edna[3] + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Juca - " + juca[3] + "voltas vencidas</li><li>2º Lugar - Edna - " + edna[3] + "voltas vencidas</li><li>3º Lugar - Pedro - " + pedro[3] + "voltas vencidas</li>"
        }
    }
}