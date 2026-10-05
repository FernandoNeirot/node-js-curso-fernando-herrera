
const buildMakePerson = ({ getIdPlugin, getAgePlugin }) => {

return ({ name, birthday, country }) => {
    return {
        id: getIdPlugin(),
        name,
        birthday,
        age: getAgePlugin(birthday),
        country
    }
}
}
module.exports = {
    buildMakePerson
}