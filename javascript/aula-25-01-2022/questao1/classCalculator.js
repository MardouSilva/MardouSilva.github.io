class Calculadora{
    constructor (){
        this.operand1 = 'undefined';
        this.operand2 = 'undefined';
        this.operation = 'undefined';
    };
    setOperand1(_operand1){
        if(typeof _operand1 === 'number'){
            this.operand1 = _operand1;
        }
        else{
            throw new Error;
        }
    };
    setOperand2(_operand2){
        if(typeof _operand2 === 'number'){
            this.operand2 = _operand2;
        }
        else{
            throw new Error;
        }
    };
    setOperation(_operation){
        let type = _operation;
        if(type === '+' || type === '-' || type === 'x' || type === '/' || type === '*'){
            this.operation = _operation;
        }
        else{
            throw new Error;
        }
    }
    getResult(){
        if(this.operand1 !== 'undefined' && this.operand2 !== 'undefined' && this.operation !== 'undefined'){
            if(this.operation === '+'){
                return this.operand1 + this.operand2;
            }
            else if(this.operation === '-'){
                return this.operand1 - this.operand2;
            }
            else if(this.operation === '*' || this.operation === 'x'){
                return this.operand1 * this.operand2;
            }
            else if(this.operation === '/'){
                return this.operand1 / this.operand2;
            }
            else{
                throw 'invalid operator'
            }
        }
        else{
            throw 'insufficient data';
        }
    }
    clearCalculator(){
        this.operand1 = 'undefined';
        this.operand2 = 'undefined';
        this.operation = 'undefined';
    }
}