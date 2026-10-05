// import { emailTemplate } from './js-foundation/01-template';
// console.log(emailTemplate);
// import './js-foundation/02-destructuring';
// import { getUserById } from './js-foundation/03-callbacks';
// const id = 22;
// getUserById(id, (err, user) => {
//     if (err) {
//        throw new Error(err);
//     }
//     return console.log(user);
// });

// import { buildMakePerson } from './js-foundation/05-factory';
// import { getIdPlugin, getAgePlugin } from './plugins';

// const makePerson = buildMakePerson({ getIdPlugin, getAgePlugin });

// const person = makePerson({ name: 'John', birthday: '1989-06-09', country: 'USA' });

// console.log(person);


// import { getPokemonById } from './js-foundation/06-promises';
// getPokemonById(1).then((pokemon) => console.log(pokemon)).catch(() => console.error("Intente de nuevo"));

import { buildLogger } from './plugins';

const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Error de prueba');
