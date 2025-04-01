import { rl } from "./config.js";

rl.on('close', () => console.log('Se ha cerrado la aplicación'))



const tickets = [];
let running = true;

async function mainMenu() {
  return new Promise((resolve) => {
    console.log(`
1. Nuevo ticket
2. Listar tickets
3. Buscar ticket
4. Salir
    `);
    rl.question('Seleccione opción: ', (option) => {
      resolve(option);
    });
  });
}

async function handleMenu(option) {
  switch (option) {
    case '1':
      await createTicket();
      break;
    case '2':
      await listTickets();
      break;
    case '3':
      await searchTicket();
      break;
    case '4':
      running = false;
      rl.close();
      break;
    default:
      console.log('Opción inválida');
  }
}

async function createTicket() {
  return new Promise((resolve) => {
    rl.question('Descripción del problema: ', (desc) => {
      const newTicket = {
        id: tickets.length + 1,
        descripcion: desc,
        estado: 'Abierto',
        fecha: new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Cordoba' })
      };
      tickets.push(newTicket);
      console.log(`Ticket #${newTicket.id} creado`);
      resolve();
    });
  });
}

async function listTickets() {
  if (tickets.length === 0) {
    console.log('No hay tickets registrados.');
  } else {
    console.log('\n--- Lista de Tickets ---');
    tickets.forEach(ticket => {
      console.table(ticket)
    });
  }
}

async function searchTicket() {
  return new Promise((resolve) => {
    rl.question('Ingrese el ID del ticket a buscar: ', (id) => {
      const ticketId = parseInt(id);
      if (isNaN(ticketId)) {
        console.log('Por favor, ingrese un ID numérico válido.');
        resolve();
        return;
      }

      const foundTicket = tickets.find(ticket => ticket.id === ticketId);

      if (foundTicket) {
        console.log('\n--- Ticket Encontrado ---');
        console.log(`ID: ${foundTicket.id}`);
        console.log(`Descripción: ${foundTicket.descripcion}`);
        console.log(`Estado: ${foundTicket.estado}`);
        console.log(`Fecha de creación: ${foundTicket.fecha}`);
        console.log('---');
      } else {
        console.log(`No se encontró ningún ticket con el ID #${ticketId}.`);
      }
      resolve();
    });
  });
}

async function main() {
  while (running) {
    const option = await mainMenu();
    await handleMenu(option);
  }
}

main();