const axios = require('axios');
const buildHttp = (headers = {}) => {
    return {
        get: async (url) => {
            const response = await axios.get(url, { headers });
            return response.data;
        },
        post : async (url, data) => {},
        put : async (url, data) => {},
        delete : async (url) => {},
    }
}


module.exports = { 
    http: buildHttp,
 };
