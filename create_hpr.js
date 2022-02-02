#!/usr/bin/env node

const { dirStructure } = require("./structure/base.js");
const { create } = require('./structure/create.js');
const { checkArgs } = require('./util/checkArgs.js');
const fs = require('fs');
const path = require('path');
const commandLineArgs = process.argv;

checkArgs(commandLineArgs)
const projectName = commandLineArgs.slice(2, 4)[0];
// Make root folder
const projectPath = path.resolve(projectName);
fs.mkdirSync(projectPath)
create(dirStructure, projectPath);

