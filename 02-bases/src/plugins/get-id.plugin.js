const {v4:uuidv4} = require('uuid');

const getIdPlugin = () => {
    return uuidv4();
}

module.exports = { getIdPlugin };