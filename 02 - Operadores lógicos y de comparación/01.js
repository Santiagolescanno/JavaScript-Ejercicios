/*
Crear un programa que pida al usuario ingresar un número que represente el límite inferior del rango, uno que represente el límite mayor, 
y luego otro cualquiera y mostrar en un mensaje si el último número se encuentra dentro del rango ingresado.
*/

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

 
const range = () => {
    let min, max, number; // Declarar las variables aquí

    rl.question('Rango minimo: ', (minAnswer) => {
        min = parseInt(minAnswer); // Convertir a número

        rl.question('Rango maximo: ', (maxAnswer) => {
            max = parseInt(maxAnswer); // Convertir a número

            rl.question('Tu número: ', (numberAnswer) => {
                number = parseInt(numberAnswer); // Convertir a número

                // Validación y lógica
                if (number >= min && number <= max) { // Corrección del || por &&
                    console.log('Tú número se encuentra dentro del rango');
                } else {
                    console.log('Tú número NO se encuentra dentro del rango');
                }

                rl.close(); // Cerrar la interfaz readline
            });
        });
    });
}

range();
