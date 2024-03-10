const operator = (num1, num2, oper) => {
    if (num2 === '0') {
        screen.style.cssText = 'color: red; font-size: 24px'
        return "Error! can't divide by zero"
    }
    num1 = +num1;
    num2 = +num2;
    switch (oper) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return NaN;
    }
}

function resetCalculator() {
    num1 = '';
    num2 = '';
    oper = '';
    screen.textContent = '0';
    screen.style.cssText = 'color: white; font-size: 64px'
}

let num1 = '';
let num2 = '';
let oper = '';

const screen = document.querySelector('#screen');
screen.textContent = '0';

const numberBtn = document.querySelectorAll('.numberBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (oper === '') {
            num1 += buttonText;
        } else {
            num2 += buttonText;
        }
        screen.textContent = oper === '' ? num1 : num2;
    });
});


operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        buttonText = button.textContent;

        if (buttonText === 'AC') {
            resetCalculator();
        } else if (num1 === '' && num2 === '') {
            // case2: clicked operator before numbers:
        } else if (num1 !== '' && num2 !== '' && oper !== '') {
            num1 = String(operator(num1, num2, oper));
            screen.textContent = num1;
            oper = buttonText;
            num2 = '';
        } else if (buttonText === '=') {
            if (num1 !== '' && num2 !== '') {
                num1 = String(operator(num1, num2, oper));
                screen.textContent = num1;
                num2 = '';
            }
        } else {
            oper = button.textContent;
        }
    })
})