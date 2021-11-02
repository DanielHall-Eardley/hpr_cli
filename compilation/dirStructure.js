const { readdirSync } = require('fs');
const path = require('path');

/* reads the pages directory and update esbuild entry points
accordingly.  */
exports.dirStructure = dirStructure
function dirStructure(readDir=readdirSync) {
  const pagesFolder = path.join(__dirname, 'pages');
  const pages = readDir(pagesFolder);
  console.log(pages);
  pages.for
}