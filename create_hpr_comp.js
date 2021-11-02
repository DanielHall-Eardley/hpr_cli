const { createComponent } = require('./structure/create.js');
const componentName = process.argv.slice(2, 4)[0];

createComponent(componentName);