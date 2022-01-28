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
const math = new Calculadora();
let value = '';
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const viewfinder = document.getElementById('viewfinder');
const equal = document.getElementById('result');
let clear = true;

function createNumber(item){
    if(clear === true){
        value += `${item.target.innerHTML}`;
        viewfinder.innerHTML = `${item.target.innerHTML}`;
        clear = false;
    }else{
        value += `${item.target.innerHTML}`;
        viewfinder.innerHTML += `${item.target.innerHTML}`;
    }
};

function operator(item){
    if(clear === true){
        if(item.target.value === '+' || item.target.value === '-'){
            value += `${item.target.value}`;
        viewfinder.innerHTML = `${item.target.value}`;
        clear = false;
        }
        else{
            return false;
        }
    }
    else{
        console.log(`${value}, ${item.target.value}`)
        math.setOperand1(Number(value));
        math.setOperation(item.target.value);
        viewfinder.innerHTML += `${item.target.value}`
        value = '';
    }
};

function result(){
    console.log(`${value}`);
    math.setOperand2(Number(value));
    viewfinder.innerHTML = `${math.getResult()}`;
    math.clearCalculator();
    value = '';
    clear = true;
}

numbers.forEach((item, index) => {
    item.addEventListener('click', createNumber);
});

operators.forEach((item, index) => {
    item.addEventListener('click', operator);
});

equal.addEventListener('click', result)