/*
Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la cuota al día, o no miembros que tengan autorización. 
Hacer un programa que pregunte estas si es miembro, si tiene la cuota al día y si tiene autorización y muestre luego un mensaje indicando si tiene el acceso permitido o no.
*/

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


const access = () => {
    rl.write(`
        Bienvenido al Club
        Responder solamente con 'si' o 'no' las preguntas
        >
    `)
    rl.question('Eres miembro del club? >', (answer) => {
        if (answer.toLocaleLowerCase() === 'si') {
            rl.question('Tienes al cuota al día? >',(answer) => {
                if (answer.toLocaleLowerCase() === 'no') {
                    rl.write('No puedes acceder a menos que tengas la cuota al día');
                    rl.close();
                    process.exit();
                }
                rl.write('Gracias por tu visita, disfruta del día en el Club');
                process.exit();
            })
        } else{
            rl.question('Tienes la autorización del dueño? >', (answer) => {
                if (answer.toLocaleLowerCase() === 'no') {
                    rl.write('No puede acceder al club')
                    rl.close();
                    process.exit();
                }
                rl.write('Gracias por tu visita, disfruta del día en el Club');
                process.exit();
            })
        }
    })
}

access();