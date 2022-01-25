const data = require('./funcionarios.json')

function setor(local){
    const filtro = data.filter((array) => {
        if(array.setor.toLowerCase() === local.toLowerCase()){
            return true;
        }
        else{
            return false;
        }
    });
    const result = filtro.map((array) => {
    	return {
            nome: array.nome,
            setor: array.setor
        }
    });
    return result;
};

module.exports = {setor};