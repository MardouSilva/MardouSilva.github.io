function aniversariante(mes, funcionarios){
    const filtro = funcionarios.filter(function(funcionario){
        const data = new Date(funcionario.nascimento);
        if(mes === data.getMonth() + 1){
            return funcionario.nome;
        }
    });
    const result = filtro.map((array) => {
    	return array.nome;
    })
    return result;
}

module.exports = {aniversariante}