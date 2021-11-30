const { write } = require('fs');
const path = require('path');

/* import the component css to the page 
entry point css file */
exports.writeCssPage = function (components, pagePath, writeFile=write) {
  const importCssStrings = components.map(comp => {
    return `@import './components/${comp}/${comp}.css'\n`
  });

  const string = importCssStrings.join(' ');
  const cssFilePath = path.join(pagePath, '')
  writeFile()
};