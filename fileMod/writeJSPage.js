const fs = require('fs');
const path = require('path');
const { entryScript } = require('../files/entryScript');

function createJSImports (interactionFiles, reduceObj, folderName) {
  for (let file of interactionFiles) {
    const fileType = file.split('.')[0];
    const fileName = `${fileType}_${folderName}`
    reduceObj.imports += `import ${fileName} from './components/${folderName}/${file}' \n`
    reduceObj.fileArray = [...reduceObj.fileArray, fileName];
  }

  return reduceObj
}

function createJSFile (importObject) {
  const stringifiedArray = `const interactions = [
    ${importObject.fileArray.toString()}
  ]`;
  
  const file = `${importObject.imports} \n ${stringifiedArray} \n ${entryScript}`
  return file
}

exports.writeJSPage = async function (
  componentFolder, 
  pagePath, 
  pageName,
  fileSystem=fs
) {
  const importObject = componentFolder.reduce((obj, folder) => {
    const interactionFiles = folder.dir.filter(file => {
      return file.match('input') || file.match('submit');
    });

    if (interactionFiles?.length > 0) {
      const newObj = createJSImports(interactionFiles, obj, folder.name);
      return newObj;
    }

    return obj;
  }, {
    imports: '',
    fileArray: []
  })
  
  const jsFilePath = path.join(pagePath, `${pageName}.js`);
  const jsFile = createJSFile(importObject);
  fileSystem.writeFileSync(jsFilePath, jsFile);
};