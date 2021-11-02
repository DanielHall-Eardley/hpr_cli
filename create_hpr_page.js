const { createPage } = require('./structure/create.js');
const pageName = process.argv.slice(2, 4)[0];

createPage(pageName);