// Captura los parámetros pasados al ejecutar el script
const args = process.argv.slice(2);

if (args.length < 2) {
    console.error('Error - Use: node 01.js <command01> <command02>')
    process.exit(1);
}

const [command01, command02] = args;
console.log(`01: ${command01}`);
console.log(`02: ${command02}`);
