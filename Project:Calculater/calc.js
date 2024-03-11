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
    equation = '';
    screen.textContent = '0';
    screen.style.cssText = 'color: white; font-size: 64px'
}

let num1 = '';
let num2 = '';
let oper = '';
let equation = '';
const screen = document.querySelector('#screen');
screen.textContent = '0';

const numberBtn = document.querySelectorAll('.numberBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        if(screen.textContent.length < 11){
            const buttonText = button.textContent;
            // oper is empty implies num1 is being initiated
            if (oper === '') {
                if (num1.length < 11) {
                    num1 += buttonText;
                    equation += buttonText;
                    // console.table(`num1: ${num1}, num2: ${num2}, oper: ${oper}, equation: ${equation}`)
                    screen.textContent = equation;
                }
    
            } else {
                num2 += buttonText;
                equation += buttonText;
                screen.textContent = equation;
            }
            // screen.textContent = (oper === '') ? num1 : num2;
        }
        
    });
});

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        // Handle AC button
        if (buttonText === 'AC') {
            resetCalculator();
        } else if (buttonText === '=') {
            // Handle '=' button
            if (num1 !== '' && num2 !== '') {
                num1 = String(operator(num1, num2, oper));
                screen.textContent = num1;
                num2 = '';
            }
        } else if (buttonText === 'back') {
            // Handle 'back' button
            if (oper === '=' || num2 !== '') {
                num2 = num2.slice(0, -1);
            } else if (oper !== '') {
                oper = '';
            } else if (num1 !== '') {
                num1 = num1.slice(0, -1);
            }
            equation = (num1 === '') ? '0' : num1 + oper + num2;
            screen.textContent = equation;
        } else if(buttonText == '+/-'){
            console.log(`num1: ${num1}, num2: ${num2}, oper: ${oper}, equation: ${equation}`)
            if(num2 !== ''){
                num2 = String(+num2 * (-1));
                equation = (num2 < 0) ? num1 + oper + '(' + num2 + ')' : num1 + oper + num2;
                screen.textContent = equation;
            }
            else if(oper !== '' && equation === ''){}
            else if(num1 !== ''){
                num1 = String(+num1 * (-1));
                equation = num1;
                screen.textContent = equation;
            }
        } else {
            // Handle other operators
            if (num1 !== '' && num2 !== '' && oper !== '') {
                num1 = String(operator(num1, num2, oper));
                num2 = '';
            }
            oper = buttonText;
            equation = (oper !== '=') ? num1 + oper : num1;
            screen.textContent = equation;
        }
    })
});
