// VARIABLES:
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('.clear');
const clearEntryBtn = document.querySelector('.clear-entry');
const equalBtn = document.querySelector('.equal');

loadListeners();

// LISTENERS: 
function loadListeners() {
    buttons.forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button.textContent));
    });
    clearBtn.addEventListener('click', clearDisplay);
    clearEntryBtn.addEventListener('click', deleteLast);
    equalBtn.addEventListener('click', calculateResult);
}

// FUNCTIONS:


function handleButtonClick(char) {
    if (char.match(/[0-9+\-*/().]/)) {
        appendCharacter(char);
    }
}


function appendCharacter(char) {
    const lastChar = display.innerText[display.innerText.length - 1];

    if (char === '.') {
        const currentNumber = getCurrentNumber();
        if (currentNumber.includes('.')) {
            return; 
        }
        if (currentNumber === '') {
            display.innerText += '0'; 
        }
    }

    if (display.innerText === '0' && char === '-') {
        display.innerText = '-';
        return;
    }

    
    if (display.innerText === '0' && !isOperator(char) && char !== '.') {
        display.innerText = char;
    } else {
       
        if (isOperator(char)) {
            if (char === '' && (lastChar === '' || isOperator(lastChar) || lastChar === '(')) {
   
                return;

            } if (isOperator(lastChar) && char !== '(') {
                
                return;
            }
        }

        display.innerText += char;
    }

  
}


function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function getCurrentNumber() {
    const operators = ['+', '-', '*', '/'];
    let currentNumber = '';
    let i = display.innerText.length - 1;

    while (i >= 0 && !operators.includes(display.innerText[i]) && display.innerText[i] !== '(') {
        currentNumber = display.innerText[i] + currentNumber;
        i--;
    }
    return currentNumber;
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    try {
        const expression = display.innerText.replace(/(\d)(\()/g, '$1*(')
                                            .replace(/(\))(\d)/g, ')*$2')
                                            .replace(/(\))(\()/g, ')*(')
                                            .replace(/(\+-|-\+|\*\+|\/\+)/g, '$1');
        let result = eval(expression);
        
        result = parseFloat(result.toFixed(4));
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}
