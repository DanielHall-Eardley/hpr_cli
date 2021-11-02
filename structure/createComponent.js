const { makeDir } = require('../fileMod/makeDir');
const { makeFiles } = require('../fileMod/makeFiles');
const { normalizePath } = require('../fileMod/normalizePath.js');
const { createPageFiles } = require('../fileMod/createPageFiles');

exports.createComponent = function (componentName) {
  const absolutePath = normalizePath(componentName, __dirname);
  makeDir(absolutePath);
  makeFiles(createPageFiles(componentName));
};