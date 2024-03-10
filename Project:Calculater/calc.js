let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => (num1 / num2);

let num1, num2, oper;

let operator = (num1, num2, oper) => {
    switch (oper){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            console.log("Invalid operator");
            return NaN;
    }
}

console.log(operator(90,4,'+'));
