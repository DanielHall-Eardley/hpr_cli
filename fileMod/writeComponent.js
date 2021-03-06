const fs = require('fs');
const path = require('path')

async function writeInteractionFiles (interactions, basePath, fileSystem=fs) {
  const files = Object.keys(interactions);
  for (let fileName of files) {
    const filePath = path.join(basePath, `${fileName}.js`);
    const interactionData = interactions[fileName];
    const interactionObject = await formatInteractionObject(interactionData);
    const preservedImports = preserveFileImports(filePath);
    const data = preservedImports + '\n\n' + interactionObject;
    fileSystem.writeFileSync(filePath, data);
  }
}

function preserveFileImports (filePath, fileSystem=fs) {
  const fileData = fileSystem.readFileSync(filePath, { encoding: 'utf8' });
  const stringArray = fileData.split('\n');
  const imports = stringArray.filter(string => string.match('require'));
  return imports.join('\n');
}

async function formatInteractionObject (interactionObject) {
  const module = await import('stringify-object')
  const stringifyObject = module.default;
  const formatOptions = {
    indent: '  ',
    inlineCharacterLimit: 50
  };

  const fileData = stringifyObject(
    interactionObject,
    formatOptions
  );

  return `module.exports = ${fileData};`
}

exports.writeComponent = async function(data, basePath) {
  writeInteractionFiles(data.interactions, basePath);
}