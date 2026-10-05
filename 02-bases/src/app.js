
// const { emailTemplate } = require('./js-foundation/01-template');
// console.log(emailTemplate);
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const id = 22;
// getUserById(id, (err, user) => {
//     if (err) {
//        throw new Error(err);
//     }
//     return console.log(user);
// });

// !05-factory.js
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const { getIdPlugin, getAgePlugin } = require('./plugins');

// const makePerson = buildMakePerson({ getIdPlugin, getAgePlugin });

// const person = makePerson({ name: 'John', birthday: '1989-06-09', country: 'USA' });

// console.log(person);


// !06-promises.js
const { getPokemonById } = require('./js-foundation/06-promises');
getPokemonById(1).then((pokemon) => console.log(pokemon)).catch(() => console.error("Intente de nuevo"));

