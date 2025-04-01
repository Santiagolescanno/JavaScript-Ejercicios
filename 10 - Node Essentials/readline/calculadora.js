import { rl } from './config.js';

const operations = {
    '+' : (a,b) => a + b,
    '-' : (a,b) => a - b,
    '*' : (a,b) => a * b,
    '/' : (a,b) => a / b,
}

const calculate = () => {
    rl.question('Ingrese operación (EJ: 5+3)', (input) => {
        const operator = Object.keys(operations).find(op => input.includes(op));

        if (!operator) {
            console.log('Operador no válido o no encontrado!');
            return calculate();
        }

        const parts = input.split(operator);

        if (parts.length !== 2) {
            console.log('Formato de operación inválido. Ejemplo: número operador número');
            return calculate();
        }

        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts[1]);

        if (isNaN(num1) || isNaN(num2)) {
            console.log('Operandos no válidos. Por favor, ingrese números.');
            return calculate();
        }

        const result = operations[operator](num1, num2);
        console.log('Resultado: ' + result);
        calculate();
    });
};

calculate();