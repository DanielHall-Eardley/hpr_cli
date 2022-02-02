const { interactionConstants } = require('../constants.js');
const path = require('path');
const { INT_SUBMIT, INT_INPUT } = interactionConstants;

const interactionFiles = [
  INT_INPUT,
  INT_SUBMIT
];

function createImportPromises (basePath, fileNameArray) {
  const importPromises = fileNameArray.map(fileName => {
    const filePath = path.join(basePath, `${fileName}.js`)
    const promise = import(filePath);
    return promise;
  })

  return importPromises;
}

function createInteractionObject (modules) {
  const interactionObject = modules.reduce((obj, module) => {
    const data = module.default;
    obj = {...obj, ...data};
    return obj;
  }, {})

  return interactionObject;
}

exports.importInteractions = async function (basePath, interactionNames=interactionFiles) {
  const importPromises = createImportPromises(basePath, interactionNames)
  const modules = await Promise.all(importPromises);
  const interactionObject = createInteractionObject(modules);
  return interactionObject;
};