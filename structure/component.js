const { templateEngine } = require('../constants.js');

exports.component = function (componentName) {
  const htmlFile = `${componentName}.${templateEngine}`
  const cssFile = `${componentName}.css`;
  const defaultInteractionFile = 'module.exports = {}'

  return [{
    name: componentName,
    files: [
      htmlFile, 
      {
        name: 'input.js',
        data: defaultInteractionFile
      }, 
      {
        name: 'submit.js',
        data: defaultInteractionFile
      }, 
      cssFile
    ]
  }]
};