function add(a,b){
    return (a + b);
}

function subtract(a,b){
    return (a - b);
}

function multiply(a,b){
    return (a * b);
}

function divide(a,b){
    return (a / b);
}

function operate(operator, a, b){
    //console.log(operator, a, b);
    if (operator == '+'){
        return add(a, b);
    } else if (operator == '-'){
        return subtract(a, b);
    } else if (operator == '*'){
        return multiply(a,b);
    } else if (operator == '/'){
        return divide(a, b);
    }
}

let displayVal = '';
let firstNum;
let secondNum = '';
let operatorInput = '';
let operatorPressed = false;

function displayResults(i){
    displayVal += i;
    if (operatorPressed){
        secondNum += i;
    }
    document.getElementById('result').textContent = displayVal;
}

function inputOperator(operator){
    firstNum = displayVal;
    if (operator == 'plus' && operatorPressed == false){
        displayResults('+');
        operatorInput = '+';
        operatorPressed = true;
    } else if (operator == 'minus' && operatorPressed == false){
        displayResults('-');
        operatorInput = '-';
        operatorPressed = true;
    } else if (operator == 'times' && operatorPressed == false){
        displayResults('*');
        operatorInput = '*';
        operatorPressed = true;
    } else if (operator == 'divide' && operatorPressed == false){
        displayResults('/');
        operatorInput = '/';
        operatorPressed = true;
    }
}

function equals(operatorInput, firstNum, secondNum){
    let result = operate(`${operatorInput}`, Number(firstNum), Number(secondNum));
    document.getElementById('result').textContent = result;
}

document.getElementById('plus').addEventListener('click', function(){inputOperator('plus')});
document.getElementById('minus').addEventListener('click', function(){inputOperator('minus')});
document.getElementById('times').addEventListener('click', function(){inputOperator('times')});
document.getElementById('divide').addEventListener('click', function(){inputOperator('divide')});
document.getElementById('equals').addEventListener('click', function(){equals(operatorInput, firstNum, secondNum)});





const toAdd = document.createDocumentFragment()
for (let i = 0; i<=9; i++){
    const newButt = document.createElement('BUTTON');
    newButt.id = i;
    newButt.className = 'numButt';
    newButt.innerHTML = i;
    newButt.addEventListener('click', function(){displayResults(newButt.id)})
    toAdd.appendChild(newButt);
}
document.getElementById('buttCont').appendChild(toAdd)

