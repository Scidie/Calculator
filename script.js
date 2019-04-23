
const buttonsContainer = document.querySelector('.buttons-container');
const symbolsContainer = document.querySelector('.symbols-container');
let outputDisplay = document.getElementById('output-display');

let history = '';
let resetOutput = false;

buttonsContainer.addEventListener('click', function(event) {
    if (resetOutput === true) {
        outputDisplay.value = '';
        resetOutput = false;
    }
    outputDisplay.value += event.target.innerHTML;
});

symbolsContainer.addEventListener('click', function(event) {

    let symbol = event.target.innerHTML;

    if (symbol !== '=') {
        addToHistory(outputDisplay.value, symbol);
        resetOutput = true;
    } else if (symbol === '=') {
        symbol = '';
        addToHistory(outputDisplay.value, symbol);
        outputDisplay.value = evaluate();
        history = '';
    }
    
});

function addToHistory(output, symbol) {
    history += output + symbol;
}

function evaluate() {
    let test = eval(history).toString();
    return test;
}













// let i = 1;
// let j = 2;
// let k = 3;
// let plus = '+';

// let history = '0';

// function addToHistory(output, symbol) {
//     history += plus + output;
// }

// function evaluate() {
//     console.log(eval(history));
// }

// addToHistory(i, plus);
// addToHistory(j, plus);
// addToHistory(k, plus);
// evaluate();




