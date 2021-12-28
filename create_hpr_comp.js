const { create } = require('./structure/create');
const { component } = require('./structure/component');
const path = require('path');

const commandLineArgs = process.argv;
const pageName = commandLineArgs[2];
const componentName = commandLineArgs[3];
const componentFolder = path.join('./test', 'pages', pageName, 'components');
const componentStructure = component(componentName);

create(componentStructure, componentFolder);