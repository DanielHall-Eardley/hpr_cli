/* todo
  Preserve update imports in input and submit files
  Change the update fn to have the code for finding 
  the html element prewritten
  import and combine the input and submit interction files
  for each component into the main page js file
  create the the build bundle
  change the template render engine to handlebars
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

exports.compile = async function (relativePath=__dirname) {
  const pages = getPages(relativePath);

  for (let pageName of pages) {
    const pagePath = path.join(relativePath, 'pages', pageName);
    const componentPath = path.join(pagePath, 'components');
    const components = fs.readdirSync(componentPath);

    for (let compName of components) {
      const basePath = path.join(componentPath, compName);
      const htmlFilePath = createCompFilePath(basePath, 'ejs');
      const htmlFile = fs.readFileSync(htmlFilePath, { encoding: 'utf8'});
      const html = getHtmlElements(htmlFile);
      const data = await parse(html, basePath);
      writeComponent(data, basePath);
    }

    writePage(components, pagePath);
  }
  
  // const entryPoints = createEntryPoints(pages);
  // // add entry points from pages array
  // const newConfig = config(entryPoints);
  // es.build(newConfig);
}