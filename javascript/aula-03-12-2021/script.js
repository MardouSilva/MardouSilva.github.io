const carro = {
    popular: {
        velMaxima: {
            min: 180,
            max: 200,
        },
        velMinima: {
            min: 110,
            max: 130,
        },
        derrapagem: {
            min: 300,
            max: 400,
        },
    },
    sport: {
        velMaxima: {
            min: 195,
            max: 215,
        },
        velMinima: {
            min: 125,
            max: 145,
        },
        derrapagem: {
            min: 200,
            max: 300,
        },
    },
    superSport: {
        velMaxima: {
            min: 210,
            max: 230,
        },
        velMinima: {
            min: 140,
            max: 160,
        },
        derrapagem: {
            min: 100,
            max: 175,
        },
    },
}

const corrida = {
    rapida: 10,
    grandePremio: 70,
    enduro: 160,
}

let pedro, edna, juca;

function raridade(){
    let tipo = Math.random() * (100);
    if(tipo<=60){
        return carro.popular;
    }
    else if(60<tipo<=95){
        return carro.sport;
    }
    else{
        return carro.superSport;
    }
}

function velocidade(pessoa){
    let velTotal, minima, maxima, derrapa;
    maxima = (Math.random() * (pessoa.velMaxima.max - pessoa.velMaxima.min)) + pessoa.velMaxima.min;
    minima = (Math.random() * (pessoa.velMinima.max - pessoa.velMinima.min)) + pessoa.velMinima.min;
    derrapa = ((Math.random() * (pessoa.derrapagem.max - pessoa.derrapagem.min)) + pessoa.derrapagem.min) * 0.01;
    velTotal = ((Math.random() * (maxima - minima)) + minima);
    velTotal = velTotal - (derrapa * velTotal * 0.01);
    console.log(velTotal)
    return velTotal.toFixed(2);
}

function rapida(){
    let voltasPedro, voltasEdna, voltasJuca, velPedro, velEdna, velJuca;
    voltasPedro = 0;
    voltasJuca = 0;
    voltasEdna = 0;
    pedro = raridade();
    edna = raridade();
    juca = raridade();
    console.log(pedro)
    console.log(edna)
    console.log(juca)
    for(let i=0;i<corrida.rapida;i++){
        velPedro = velocidade(pedro);
        velEdna = velocidade(edna);
        velJuca = velocidade(juca);
        if(velPedro>velEdna && velPedro>velJuca){
            voltasPedro ++;
        }
        else if(velEdna>velPedro && velEdna>velJuca){
            voltasEdna ++;
        }
        else{
            voltasJuca ++;
        }
        console.log(velPedro)
        console.log(velEdna)
    }
    let final, premiacao;
    premiacao = document.getElementById("podio");
    final = document.createElement("ul");
    premiacao.appendChild(final);
    if(voltasPedro>voltasEdna && voltasPedro>voltasJuca){
        if(voltasEdna>voltasJuca){
            final.innerHTML="<h2>Corrida Rápida</h2><li>1º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>2º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>3º Lugar - Juca - " + voltasJuca + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Corrida Rápida</h2><li>1º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>2º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>3º Lugar - Edna - " + voltasEdna + "voltas vencidas</li>"
        }
    }
    else if(voltasEdna>voltasPedro && edna[3]>juca[3]){
        if(voltasPedro>voltasJuca){
            final.innerHTML="<h2>Corrida Rápida</h2><li>1º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>2º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>3º Lugar - Juca - " + voltasJuca + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Corrida Rápida</h2><li>1º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>2º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>3º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li>"
        }
    }
    else{
        if(voltasPedro>voltasEdna){
            final.innerHTML="<h2>Corrida Rápida</h2><li>1º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>2º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>3º Lugar - Edna - " + voltasEdna + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Corrida Rápida</h2><li>1º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>2º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>3º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li>"
        }
    }
}

function premio(){
    let voltasPedro, voltasEdna, voltasJuca, velPedro, velEdna, velJuca;
    voltasPedro = 0;
    voltasJuca = 0;
    voltasEdna = 0;
    for(let i=0;i<corrida.grandePremio;i++){
        pedro = raridade();
        velPedro = velocidade(pedro);
        edna = raridade();
        velEdna = velocidade(edna);
        juca = raridade();
        velJuca = velocidade(juca);
        if(velPedro>velEdna && velPedro>velJuca){
            voltasPedro ++;
        }
        else if(velEdna>velPedro && velEdna>velJuca){
            voltasEdna ++;
        }
        else{
            voltasJuca ++;
        }
    }
    let final, premiacao;
    premiacao = document.getElementById("podio");
    final = document.createElement("ul");
    premiacao.appendChild(final);
    if(voltasPedro>voltasEdna && voltasPedro>voltasJuca){
        if(voltasEdna>voltasJuca){
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>2º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>3º Lugar - Juca - " + voltasJuca + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>2º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>3º Lugar - Edna - " + voltasEdna + "voltas vencidas</li>"
        }
    }
    else if(voltasEdna>voltasPedro && edna[3]>juca[3]){
        if(voltasPedro>voltasJuca){
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>2º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>3º Lugar - Juca - " + voltasJuca + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>2º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>3º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li>"
        }
    }
    else{
        if(voltasPedro>voltasEdna){
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>2º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>3º Lugar - Edna - " + voltasEdna + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Grande Prêmio</h2><li>1º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>2º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>3º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li>"
        }
    }
}

function enduro(){
    let voltasPedro, voltasEdna, voltasJuca, velPedro, velEdna, velJuca;
    voltasPedro = 0;
    voltasJuca = 0;
    voltasEdna = 0;
    for(let i=0;i<corrida.enduro;i++){
        pedro = raridade();
        velPedro = velocidade(pedro);
        edna = raridade();
        velEdna = velocidade(edna);
        juca = raridade();
        velJuca = velocidade(juca);
        if(velPedro>velEdna && velPedro>velJuca){
            voltasPedro ++;
        }
        else if(velEdna>velPedro && velEdna>velJuca){
            voltasEdna ++;
        }
        else{
            voltasJuca ++;
        }
    }
    let final, premiacao;
    premiacao = document.getElementById("podio");
    final = document.createElement("ul");
    premiacao.appendChild(final);
    if(voltasPedro>voltasEdna && voltasPedro>voltasJuca){
        if(voltasEdna>voltasJuca){
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>2º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>3º Lugar - Juca - " + voltasJuca + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>2º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>3º Lugar - Edna - " + voltasEdna + "voltas vencidas</li>"
        }
    }
    else if(voltasEdna>voltasPedro && edna[3]>juca[3]){
        if(voltasPedro>voltasJuca){
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>2º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>3º Lugar - Juca - " + voltasJuca + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>2º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>3º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li>"
        }
    }
    else{
        if(voltasPedro>voltasEdna){
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>2º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li><li>3º Lugar - Edna - " + voltasEdna + "voltas vencidas</li>"
        }
        else{
            final.innerHTML="<h2>Enduro</h2><li>1º Lugar - Juca - " + voltasJuca + "voltas vencidas</li><li>2º Lugar - Edna - " + voltasEdna + "voltas vencidas</li><li>3º Lugar - Pedro - " + voltasPedro + "voltas vencidas</li>"
        }
    }
}