const { create } = require('./structure/create.js');
const { checkArgs } = require('./util/checkArgs.js');
const { page } = require('./structure/page.js');
const path = require('path');

const commandLineArgs = process.argv;
checkArgs(commandLineArgs);
const pageName = commandLineArgs[2];
const pagesFolder = path.resolve(path.join('./test', 'pages'))
const pageStructure = page(pageName);
create(pageStructure, pagesFolder);