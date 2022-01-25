const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const fs = require('fs');

const data = require('./funcionarios.json');
const birthday = require('./aniversariantes.js');
const setorSearch = require('./setor.js');
const ramais = require('./ramais.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Method", "GET,POST");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});

app.get('/aniversario', (req, res) => {
    const month = req.query.month;
    if(0 < Number(month) && Number(month) <= 12){
        console.log('entrei');
        const result = birthday.searchBirthdays(month);
        JSON.stringify(result);
        res.json(result);
    }
    else if(typeof month === 'undefined'){
        console.log('entr');
        const result = data.map((array) => {
            return {
                nome: array.nome,
                nascimento: array.nascimento
            }
        });
        JSON.stringify(result);
        res.json(result);
    }
    else{
        res.send('Invalid value, expected on number');
    }
});

app.get('/setor', (req, res) => {
    const search = req.query.setor;
    if(typeof search !== 'undefined'){
        const result = setorSearch.setor(search);
        res.json(result);
    }
    else{
        const result = data.map((array) => {
            return {
                nome: array.nome,
                setor: array.setor
            }
        });
        
        res.json(result);
    };
})

app.get('/ramal', (req, res) => {
    const result = ramais.ramais();
    res.json(result);
});

app.post('/adicionar', (req, res) => {
    let newUser = req.body;
    try{
        fs.readFile(__dirname + '/funcionarios.json', 'utf-8', (err, d) =>{
            if(err){
                throw err;
            }
            let array = JSON.parse(d || '[]');
            newUser.matricula = array.length + 1;
            const newArray = JSON.stringify([...array, newUser]);
            fs.writeFile(__dirname + '/funcionarios.json', newArray, (err) => {
                if(err){
                    return false;
                }
            });
            return newArray;
        });
       
    }catch(err){
        console.log(err);
    }
    res.end('terminei');
});

app.listen(port, (req, res) => {
    console.log(`... running on port ${port}`);
});