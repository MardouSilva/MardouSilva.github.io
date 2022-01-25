const url = 'http://localhost:3000';
const baseAdd = {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=UTF-8' },
    mode: 'cors',
    body: {
        "matricula": 0,
        "nome": "",
        "ramal": "",
        "email": "",
        "setor": "",
        "nascimento": ""
    }
}

function enviar(obj){
    console.log(obj)
    obj.body = JSON.stringify(obj.body);
    console.log(obj.body)
    fetch(url + '/adicionar', obj)
    .then((res) => {
        console.log(res);
        return res;
    })
    .then((data) => {
        console.log(data);
    });
}

function adicionar(){
    document.getElementById('alert').innerHTML = ''
    let data = baseAdd;
    data.body.nome = document.getElementById("nome").value;
    data.body.ramal = document.getElementById("ramal").value;
    data.body.email = document.getElementById("email").value;
    data.body.setor = document.getElementById("setor").value;
    data.body.nascimento = document.getElementById("data").value;
    if(data.body.nome === '' || data.body.ramal === '' || data.body.email === '' || data.body.setor === '' || data.body.nascimento === ''){
        document.getElementById('alert').innerHTML = 'Tem campos que ainda precisam ser preenchidos!';
        return false;
    }
    enviar(data);
    document.getElementById("nome").value = "";
    document.getElementById("ramal").value = "";
    document.getElementById("email").value = "";
    document.getElementById("setor").value = "";
    document.getElementById("data").value = "";
    document.getElementById("alert").innerHTML = "";
}

function newDate(array){
    const novo = array.nascimento.split('/').reverse().join('/');
    array.nascimento = novo;
    return array;
}

function imprimirAniver(array){
    const local = document.getElementById('resultado');
    local.innerHTML += `<li>Funcionario: ${array.nome} -- Data: ${array.nascimento}</li>`
}

function aniver(){
    document.getElementById('resultado').innerHTML = '';
    const month = document.getElementById("searchAniver").value;
    if(month == 0){
        fetch(`${url}/aniversario`)
        .then((res) => {return res.json()})
        .then((data) => {
            const final = data.map(newDate);
            final.forEach(imprimirAniver);
        });
    }
    else{
        fetch(`${url}/aniversario?month=${month}`)
        .then((res) => {return res.json()})
        .then((data) => {
            const final = data.map(newDate);
            final.forEach(imprimirAniver)
        });
    }
}

function imprimirSetor(array){
    const local = document.getElementById('resultado');
    local.innerHTML += `<li>Funcionario: ${array.nome} -- Setor: ${array.setor}</li>`
}

function setor(){
    document.getElementById('resultado').innerHTML = '';
    const local = document.getElementById("searchSetor").value;
    if(local == 0){
        fetch(`${url}/setor`)
        .then((res) => {return res.json()})
        .then((data) => {
            data.forEach(imprimirSetor);
        });
    }
    else{
        fetch(`${url}/setor?setor=${local}`)
        .then((res) => {return res.json()})
        .then((data) => {
            data.forEach(imprimirSetor);
        })
    }
    ;
}

function imprimirRamal(array){
    const local = document.getElementById('resultado');
    local.innerHTML += `<li>Funcionario: ${array.nome} -- Ramal: ${array.ramal}</li>`
}

function ramal(){
    document.getElementById('resultado').innerHTML = '';
    document.getElementById("extras").innerHTML ="";
    fetch(`${url}/ramal`)
    .then((res) => {return res.json()})
    .then((data) => {
        data.forEach(imprimirRamal)
    });
}

function infoType(){
    const type = document.getElementById("type").value;
    if(type === 'aniversario'){
        document.getElementById("extras").innerHTML = `<input type="number" id="searchAniver" min="1" max="12" value="0" placeholder="Insira um mês">
        <button type="button" id="botaoExtraAniver" onclick="aniver()">Enviar</button>`;
    }
    else if(type === 'setor'){
        document.getElementById("extras").innerHTML = `<input type="text" id="searchSetor" value="" placeholder="Insira o setor">
        <button type="button" id="botaoExtraSetor" onclick="setor()" value="0">Enviar</button>`;
    }
    else if(type === 'ramal'){
        ramal();
    }
}