const { makeDir } = require('../fileMod/makeDir');
const { makeFiles } = require('../fileMod/makeFiles');
const { normalizePath } = require('../fileMod/normalizePath.js');
const { createPageFiles } = require('../fileMod/createPageFiles');

exports.createPage = function (pageName, relativePath=__dirname) {
  const pageFolder = `${relativePath}/pages`
  const absolutePath = normalizePath(pageName, pageFolder);
  makeDir(absolutePath);
  const componentsFolder = normalizePath('components', absolutePath);
  makeDir(componentsFolder);
  makeFiles(createPageFiles(pageName));
};