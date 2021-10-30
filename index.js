const { dirStructure } = require("./structure/base.js");
const { create } = require('./structure/create.js');
const { makeDir } = require('./structure/makeDir');
const projectName = process.argv.slice(2, 4)[0];

// Make root folder
makeDir(projectName);

create(dirStructure, projectName);

