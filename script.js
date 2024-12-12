document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputBox');
    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            if (e.target.classList.contains('operator')) {
                handleOperator(e.target.textContent);
            } else if (e.target.classList.contains('equalBtn')) {
                calculateResult();
            } else {
                inputBox.value += e.target.textContent;
            }
        });
    });

    function handleOperator(operator) {
        switch (operator) {
            case 'AC':
                inputBox.value = '';
                break;
            case 'DEL':
                inputBox.value = inputBox.value.slice(0, -1);
                break;
            case '%':
                inputBox.value = (parseFloat(inputBox.value) / 100).toString();
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                inputBox.value += ` ${operator} `;
                break;
            default:
                break;
        }
    }

    function calculateResult() {
        try {
            // Evaluate the expression
            const result = eval(inputBox.value.replace(/[^-()\d/*+.]/g, ''));
            if (result === undefined || result === Infinity || isNaN(result)) {
                inputBox.value = 'Error';
            } else {
                inputBox.value = result;
            }
        } catch {
            inputBox.value = 'Error';
        }
    }
});
