function setor(local, funcionarios){
    const filtro = funcionarios.filter((array) => {
        if(array.setor === local){
            return array.nome;
        }
    });
    const result = filtro.map((array) => {
    	return array.nome;
    })
    return result;
};

module.exports = {setor};