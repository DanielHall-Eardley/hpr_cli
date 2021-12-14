const { interactionConstants } = require('../constants.js');
const { INT_SUBMIT, INT_INPUT, INT_UPDATE } = interactionConstants;
const path = require('path');

const interactionFiles = [
  INT_INPUT,
  INT_SUBMIT,
  INT_UPDATE
];

function createImportPromises (basePath, fileNameArray) {
  const importPromises = fileNameArray.map(fileName => {
    const relativeFilePath = `../${basePath}/${fileName}.js`
    const promise = import(relativeFilePath);
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