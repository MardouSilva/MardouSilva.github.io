const fs = require('fs');
const express = require('express');
const app = express();
const port = 3001;

const data = require("../backend/funcionarios.json");

app.use(express.static(__dirname + '/pages'));
console.log()
app.get('/', (req, res) => {
    res.sendFile('/pages/index.html', {root: __dirname});
});

app.listen(port, (req, res) => {
    console.log(`...running on port ${port}!`);
});