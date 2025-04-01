// Tu archivo principal
import { rl } from './config.js';

rl.on('close', () => {
  console.log(`Sesión Finalizada`);
  process.exit(0);
});

rl.question('¿Cuál es tu nombre?', (answer) => {
  console.log('\nHermoso nombre! ' + answer);
    rl.close()
});
