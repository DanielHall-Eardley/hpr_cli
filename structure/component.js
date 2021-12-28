const { templateEngine } = require('../constants.js');

exports.component = function (componentName) {
  const htmlFile = `${componentName}.${templateEngine}`
  const cssFile = `${componentName}.css`;

  return [{
    name: componentName,
    files: [htmlFile, 'input.js', 'submit.js', cssFile]
  }]
};