function exibir(matriz){
  try{
    if(typeof(matriz) === "number" || typeof(matriz) === "string"){
      console.log(matriz);
    }
    else if(typeof(matriz.length) !== 'number'){
      console.log(matriz);
    }
    else{
      for(let cont = 0;cont<matriz.length;cont++){
        exibir(matriz[cont]);
      }
    }
  }catch(err){
    if(err instanceof TypeError){
      console.log(matriz)
    }
  }
}