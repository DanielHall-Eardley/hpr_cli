const { writeFileSync, constants, accessSync } = require('fs');
const path = require('path');

/* Check each component for a existing css file.
For each css file add a relative import to 
a formatted string. Write the string containing
all imports to the page css file containing the components*/

exports.writeCssPage = function (
  components, 
  pagePath, 
  writeFile=writeFileSync,
  accessFile=accessSync,
  fsConstants=constants
) {
  const importCssStrings = components.reduce((string, compName) => {
    const componentPath = path.join(pagePath, 'components', compName);

    accessFile(componentPath, fsConstants.F_OK, err => {
      if (!err) {
        const importString = `@import './components/${compName}/${compName}.css'\n`;
        string += importString;
      }
    });
    
    return string;
  }, '');

  const pathArray = pagePath.split('/')
  const pageName = pathArray.at(-1);
  const cssFilePath = path.join(pagePath, `${pageName}.css`)
  writeFile(cssFilePath, importCssStrings);
};