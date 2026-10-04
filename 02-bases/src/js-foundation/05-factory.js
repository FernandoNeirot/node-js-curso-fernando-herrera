const { getIdPlugin, getAgePlugin } = require('../plugins');
const obj ={
    name: 'John',
    birthday: '1989-06-09',
    country: 'USA'
}

const buildPerson = ({ name, birthday, country }) => {
    return {
        id: getIdPlugin(),
        name,
        birthday,
        age: getAgePlugin(birthday),
        country
    }
}

const person = buildPerson(obj);
console.log(person);