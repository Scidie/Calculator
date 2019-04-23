let i = 1;
let j = 2;
let k = 3;
let plus = '+';



let history = '0';

function addToHistory(output, symbol) {
    history += plus + output;
}

function evaluate() {
    console.log(eval(history));
}

addToHistory(i, plus);
addToHistory(j, plus);
addToHistory(k, plus);
evaluate();




