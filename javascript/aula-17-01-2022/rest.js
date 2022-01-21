const array = ['a','b','c','d','e'];
const obj = {id:1,nome:'marcos'};
const str = 'douglas';
function teste(...rest){
	return rest;
}
console.log(teste(array, obj, str));