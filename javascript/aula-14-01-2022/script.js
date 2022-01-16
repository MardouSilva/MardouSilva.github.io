//Questao 1
const teste = [12,4,10,3];

function multiplicacao(param1, param2, param3, param4){
	return param1 * param2 * param3 * param4;
}

console.log(multiplicacao(...teste));

//Questao 2
const vetor1 = ['teste', 	'de'];
const vetor2 = ['concatenacao','definitivo'];

function concatena(vet1, vet2){
	return [...vet1,...vet2];
}

const newVetor = concatena(vetor1, vetor2);
console.log(newVetor);

//Questao3
function sorteio(){
	let vetor = [];
  for(let i=0;i<10;i++){
  	vetor = [...vetor,parseInt((Math.random() *  100) + 1)];
  }
  return vetor;
}

console.log(sorteio());