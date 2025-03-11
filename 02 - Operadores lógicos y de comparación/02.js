/*
Crear un programa que realice al usuario 3 preguntas: si se ha hecho tatuajes recientemente, si ha tenido o tiene hepatitis, si tiene anemia. 
Si responde a alguna de ellas afirmativamente, debe mostrar un mensaje que indique si puede o no donar sangre
*/
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const donacion = () => {
    let puede = true;
    rl.write(`
        Bienvenido el Centro Medico!
        Responder las peguntas solamente con 'si' o 'no'        
        `)
    rl.question('Te has hecho tatuajes dentro de los ultimos 90 días? ', (answer) => {
        if (answer.toLocaleLowerCase() === 'si') {
            puede = false;
            rl.write('No puedes donar sangre');
            process.exit();
        }else{
            rl.question('Has tenido epatitis dentro de los ultimos 90 días ', (answer) => {
                if (answer.toLocaleLowerCase() === 'si') {
                    puede = false;
                    rl.write('No puedes donar sangre');
                    process.exit();
                } else{
                    rl.question('Tienes diagnosticado anemía? ', (answer) => {
                        if (answer.toLocaleLowerCase() === 'si') {
                            puede = false;
                            rl.write('No puedes donar sangre');
                            process.exit();
                        } else{
                            console.log('Gracias por donar sangre, eres una gran persona ');
                            process.exit();
                        }
                    }) 
                }
            })
        }
})}
donacion();