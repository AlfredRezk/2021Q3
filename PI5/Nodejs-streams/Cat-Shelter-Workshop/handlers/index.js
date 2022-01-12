const homeHandler = require('./home');
const staticFile = require('./static-files');
const catHandler = require('./cats')
module.exports = [homeHandler, staticFile, catHandler]