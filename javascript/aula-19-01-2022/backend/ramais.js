function ramais(funcionarios){
    const ordem = funcionarios.sort((a, b) => {
        if(a.nome > b.nome){
            return 1;
        }
        else if(a.nome < b.nome){
            return -1;
        }
        return 0;
    });
    return ordem;
};

module.exports = {ramais};