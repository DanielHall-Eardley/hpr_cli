const { basePage } = require('../files/basePage.js')
const { entryScript } = require('../files/entryScript.js')

exports.createPageFiles = function (name) {
  const htmlFile = {
    name: `${name}.ejs`,
    data: basePage(name)
  }
  const jsFile = {
    name: `${name}.js`,
    data: entryScript
  };
  const cssFile = `${name}.css`;
  return [htmlFile, jsFile, cssFile];
};