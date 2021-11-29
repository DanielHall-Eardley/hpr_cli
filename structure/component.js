const { createCompFiles } = require('../fileMod/createCompFiles');

exports.component = function (componentName) {
  return [{
    name: componentName,
    files: createCompFiles(componentName)
  }]
};