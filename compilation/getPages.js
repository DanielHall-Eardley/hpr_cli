const { readdirSync } = require('fs');
const path = require('path');

/* reads the pages directory */
exports.getPages = function (rootDir, readDir=readdirSync) {
  const pagesFolder = path.join(rootDir, 'pages');
  const pages = readDir(pagesFolder);
  return pages;
}