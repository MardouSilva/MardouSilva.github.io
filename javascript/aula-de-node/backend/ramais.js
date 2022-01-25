const data = require('./funcionarios.json');

function ramais(){
    const ordem = data.sort((a, b) => {
        if(a.nome > b.nome){
            return 1;
        }
        else if(a.nome < b.nome){
            return -1;
        }
        return 0;
    });
    const list = ordem.map((array) => {
        return {
            nome: array.nome,
            ramal: array.ramal
        }
    });
    return list;
}

module.exports = {ramais};