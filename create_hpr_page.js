const { createPage } = require('./structure/createPage.js');
const { checkArg } = require('./util/checkArg.js');
const pageName = process.argv.slice(2, 4)[0];

checkArg(pageName);
createPage(pageName, './test');