function recursive(fator){
    if(fator === 0){
        return 1;
    }
    else{
        return fator * recursive(fator-1);
    };
};