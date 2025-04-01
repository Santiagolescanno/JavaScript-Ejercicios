// Permite terminar el proceso con códigos de estado específicos:

function shutdown(reason, code = 0) {
    console.log(`Shitting down system by: ${reason}`);
    process.exit(code);
}

const main = () => {
    try {
        throw new Error("Código malicioso");
    } catch (error) {
        shutdown(`${error.message}`, 1);
    }
}

main();