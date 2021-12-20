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
const { writePageFiles } = require('../fileMod/writePageFiles.js');
const { createCompFilePath } = require('../fileMod/createCompFilePath');

function componentDirState () {
  let state = [];

  return {
    addComponentDir(compName, dir) {
      const compObj = {
        name: compName,
        dir
      }

      state = [...state, compObj];
    },
    getState() {
      return state
    }
  }
}


exports.compile = async function (relativePath=__dirname) {
  const pages = getPages(relativePath);

  for (let pageName of pages)  {
    const pagePath = path.join(relativePath, 'pages', pageName);
    const componentFolderPath = path.join(pagePath, 'components');
    const components = fs.readdirSync(componentFolderPath);
    const componentState = componentDirState();

    for (let compName of components) {
      const componentPath = path.join(componentFolderPath, compName);
      const htmlFilePath = createCompFilePath(componentPath, 'ejs');
      const htmlFile = fs.readFileSync(htmlFilePath, { encoding: 'utf8'});
      const html = getHtmlElements(htmlFile);
      const data = await parse(html, componentPath);
      await writeComponent(data, componentPath);
      const componentFiles = fs.readdirSync(componentPath);
      componentState.addComponentDir(compName, componentFiles);
    }

    const componentFolders = componentState.getState();
    writePageFiles(componentFolders, pagePath);
  }
  
  // const entryPoints = createEntryPoints(pages);
  // // add entry points from pages array
  // const newConfig = config(entryPoints);
  // es.build(newConfig);
}