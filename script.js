let firstValue = '';
let nextValue = '';
let mathSymbol = '';
let cleanScreen = false;

function calculate(result, symbol, nextNumber) {
    if (symbol === '+') {
        return parseInt(result) + parseInt(nextNumber);
    } else if (symbol === '-') {
        return parseInt(result) - parseInt(nextNumber);
    }
};

const buttonContainer = document.querySelector('.buttons-container');
const symbolsContainer = document.querySelector('.symbols-container')
let screen = document.getElementById('screen');

buttonContainer.addEventListener('click', function(event) {
    if (cleanScreen === true) {
        screen.innerHTML = '';
        cleanScreen = false;
    }
    screen.innerHTML = screen.innerHTML + event.target.innerHTML;
});

symbolsContainer.addEventListener('click', function(event) {
    if (firstValue !== '') {
        if (nextValue === '') {
            nextValue = screen.innerHTML;
            cleanScreen = true;
        } else {
            mathSymbol = event.target.innerHTML;
            nextValue = '';
            cleanScreen = true;
        }  
    } else {
        firstValue = screen.innerHTML;
        mathSymbol = event.target.innerHTML;
        cleanScreen = true;
    }

    if (event.target.innerHTML === '=' && nextValue !== '') {
        let calculation = calculate(firstValue, mathSymbol, nextValue);
        firstValue = calculation.toString();
        screen.innerHTML = calculation.toString();
    }
})

