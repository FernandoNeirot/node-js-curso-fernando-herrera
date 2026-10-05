const { getIdPlugin } = require('./get-id.plugin');
const { getAgePlugin } = require('./get-age.plugin');
const { http } = require('./http-client.plugin');
const  buildLogger = require('./logger.plugin');

module.exports = { getIdPlugin, getAgePlugin, http, buildLogger };