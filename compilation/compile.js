/* todo
  create the css file using the same process of 
  creating js interaction files by parsing html.
  import all css into page level css
  do the same for ejs
  import interaction into eventlistener adding function
*/

const { getPages } = require('./getPages.js')
const es = require('esbuild');
const { config } = require('../buildConfig/config.js');
const { createEntryPoints } = require('../buildConfig/createEntryPoints.js');
const fs = require('fs');
const path = require('path')
const { getHtmlElements } = require('./getHtmlElements.js');
const { parse } = require('./parse.js');
const { writeComponent } = require('../fileMod/writeComponent.js');
const { writePage } = require('../fileMod/writePage.js');
const { createCompFilePath } = require('../fileMod/createCompFilePath');

exports.compile = function (relativePath=__dirname) {
  const pages = getPages(relativePath);

  pages.forEach(pageName => {
    const pagePath = path.join(relativePath, 'pages', pageName);
    const componentPath = path.join(pagePath, 'components');
    const components = fs.readdirSync(componentPath);

    components.forEach(compName => {
      const basePath = path.join(componentPath, compName);
      const htmlFilePath = createCompFilePath(basePath, 'ejs');
      const htmlFile = fs.readFileSync(htmlFilePath, { encoding: 'utf8'});
      const html = getHtmlElements(htmlFile);
      const data = parse(html, basePath);
      writeComponent(data, basePath);
    })

    writePage(components, pagePath);
  })
  
  // const entryPoints = createEntryPoints(pages);
  // // add entry points from pages array
  // const newConfig = config(entryPoints);
  // es.build(newConfig);
}