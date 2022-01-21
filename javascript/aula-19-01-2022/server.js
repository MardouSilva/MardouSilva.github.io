const express = require('express');
const app = express();
const port = 43000;

const mesNiver = require('./backend/aniversariantes.js');

const funSetor = require('./backend/setor.js');

const dadosFun = require('./backend/funcionario.json');

const listaRamal = require('./backend/ramais.js');

app.get('/aniversario', (req, res) => {
  const mes = req.query.aniversario;
  try{
    const aniver = mesNiver.aniversariantes(mes, JSON.parse(dadosFun));
    res.send(`${aniver}`);
  }catch(err){
    console.log(`${err}`);
  }
});

app.get('/setor', (req, res) => {
  const setor = req.query.setor;
  try{
    const fun = funSetor.setor(setor, JSON.parse(dadosFun));
    res.send(`${fun}`);
  }catch(err){
    console.log(`${err}`);
  }
});

app.get('/ramal', (req, res) => {
  try{
    const lista = listaRamal.ramais(setor, JSON.parse(dadosFun));
    res.send(`${lista.nome}, ${lista.ramal}\n`);
  }catch(err){
    console.log(`${err}`);
  }
});

app.listen(port, (req, res) => {
    console.log(`O server esta rodando na porta ${port}`);
});