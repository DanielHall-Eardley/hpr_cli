#!/usr/bin/env node

const { create } = require('./structure/create');
const { component } = require('./structure/component');
const { checkArgs } = require('./util/checkArgs.js');
const path = require('path');

const commandLineArgs = process.argv;
checkArgs(commandLineArgs);
const pageName = commandLineArgs[2];
const componentName = commandLineArgs[3];
const componentFolder = path.resolve('pages', pageName, 'components');
const componentStructure = component(componentName);

create(componentStructure, componentFolder);