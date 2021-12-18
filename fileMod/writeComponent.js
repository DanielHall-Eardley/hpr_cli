const fs = require('fs');
const path = require('path')
const { writeHTMLComponent } = require('./writeHTMLComponent');
const { createCompFilePath } = require('./createCompFilePath');

async function writeInteractionFiles (interactions) {
  const files = Object.keys(interactions);
  for (fileName of files) {
    const filePath = path.join(basePath, `${fileName}.js`);
    const interactionData = interactions[fileName];
    const interactionObject = formatInteractionObject(interactionData);
    fs.writeFileSync(filePath, interactionObject);
      
  }
}

function preserveFileImports (filePath) {

}

async function formatInteractionObject (interactionObject) {
  const module = await import('stringify-object')
  const stringifyObject = module.default;
  const formatOptions = {
    indent: '  ',
    inlineCharacterLimit: 50
  }
  const fileData = stringifyObject(
    interactionObject,
    formatOptions
  );
  return `module.exports = ${fileData};`
}

exports.writeComponent = async function(data, basePath) {
  const htmlFilePath = createCompFilePath(basePath, 'ejs');
  writeHTMLComponent(data.html, htmlFilePath)

  const cssFilePath = createCompFilePath(basePath, 'css');
  fs.writeFileSync(cssFilePath, data.css);

  writeInteractionFiles(data.interactions);
}