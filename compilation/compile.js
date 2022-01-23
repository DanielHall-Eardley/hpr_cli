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
const { templateEngine } = require('../constants.js')

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


exports.compile = async function (pageFolder, fileSystem=fs) {
  const pages = fileSystem.readdirSync(pageFolder);

  for (let pageName of pages)  {
    const pagePath = path.join(pageFolder, pageName);
    const componentFolderPath = path.join(pagePath, 'components');
    const components = fileSystem.readdirSync(componentFolderPath);
    const componentState = componentDirState();

    for (let compName of components) {
      const componentPath = path.join(componentFolderPath, compName);
      const htmlFilePath = createCompFilePath(componentPath, templateEngine);
      const htmlFile = fileSystem.readFileSync(htmlFilePath, { encoding: 'utf8'});
      const html = getHtmlElements(htmlFile);
      const data = await parse(html, componentPath);
      await writeComponent(data, componentPath);
      const componentFiles = fileSystem.readdirSync(componentPath);
    componentState.addComponentDir(compName, componentFiles);
    }

    const componentFolders = componentState.getState();
    writePageFiles(componentFolders, pagePath);
  }
  
  const entryPoints = createEntryPoints(pages);
  const newConfig = config(entryPoints);
  es.build(newConfig);
}