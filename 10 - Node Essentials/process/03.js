// Adaptar el comportamiento según el entorno de ejecución:
console.log(`Sistema Operativo: ${process.platform}`);
console.log(`Arquitectura CPU: ${process.arch}`);

if (process.platform === 'win32') {
    console.log('Eres usuario windows');
}else{
    console.log('Tu sistema tiene base linux!');
}