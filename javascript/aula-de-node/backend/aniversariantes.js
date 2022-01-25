const data = require('./funcionarios.json');

function searchBirthdays(month){
    month = Number(month);
    const birthdays = data.filter((array) => {
        const date = new Date(array.nascimento);
        if(month === (date.getMonth()) + 1){
            return true;
        }
    });
    const result = birthdays.map((array) => {
        return {
            nome: array.nome,
            nascimento: array.nascimento
        }
    })
    return result;
}

module.exports = {searchBirthdays};