let expression = '';

function appendToExpression(value) {
    expression += value;
    document.getElementById('expression').innerText = expression;
}

function clearExpression() {
    expression = '';
    document.getElementById('expression').innerText = expression;
    document.getElementById('result').innerText = '';
}

function calculateResult() {
    try {
        const result = eval(expression);
        document.getElementById('result').innerText = result;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        const result = Math.sqrt(eval(expression));
        document.getElementById('result').innerText = result;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}