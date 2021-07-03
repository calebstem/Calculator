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
//operator, a, b
function operate(operator, a, b){
    //console.log(operator, a, b);
    if (operator = '+'){
        return add(a, b);
    } else if (operator = '-'){
        return subtract(a, b);
    } else if (operator = '*'){
        return multiply(a,b);
    } else if (operator = '/'){
        return divide(a, b);
    }
}

let displayVal = '';
let firstNum;
let operatorInput;

function displayResults(i){
    displayVal += i;
    document.getElementById('result').textContent = displayVal;
}

function inputOperator(operator){
    operatorInput = operator;
    firstNum = displayVal;
    if (operator = 'plus'){
        displayVal += '+';
        document.getElementById('result').textContent = displayVal;
    } else if (operator = 'minus'){
        displayVal += '-';
        document.getElementById('result').textContent = displayVal;
    } else if (operator = 'times'){
        displayVal += '*';
        document.getElementById('result').textContent = displayVal;
    } else if (operator = 'divide'){
        displayVal += '/';
        document.getElementById('result').textContent = displayVal;
    }
}

document.getElementById('plus').addEventListener('click', inputOperator(plus));
document.getElementById('minus').addEventListener('click', inputOperator(minus));
document.getElementById('times').addEventListener('click', inputOperator(times));
document.getElementById('times').addEventListener('click', inputOperator(times));




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

