#!/usr/bin/env node

const { compile } = require('./compilation/compile.js');
const path = require('path');
const pageFolder = path.resolve('pages');

compile(pageFolder);