const { createCompFiles } = require('../fileMod/createCompFiles');

exports.componentStructure = function (componentName) {
  return {
    name: componentName,
    files: createCompFiles(componentName)
  }
};