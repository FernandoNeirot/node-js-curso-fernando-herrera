const getAge = require('get-age');

const getAgePlugin = (birthday) => {
    if (!birthday) {
        throw new Error('Birthday is required');
    }
    return getAge(birthday);
}

module.exports = { getAgePlugin };