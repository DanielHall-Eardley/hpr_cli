const { create } = require('./structure/create');
const { component } = require('./structure/component');
const path = require('path');

const componentName = process.argv.slice(2, 4)[0];
const componentFolderPath = path.join(__dirname, 'components');
const componentStructure = component(componentName);

create(componentStructure, componentFolderPath);