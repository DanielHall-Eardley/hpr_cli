const { create } = require('./create');
const path = require('path');

const componentName = process.argv.slice(2, 4)[0];
const componentFolder = path.join(__dirname, 'components');

create(componentName, componentFolder);