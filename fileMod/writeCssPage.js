const fs = require('fs');
const path = require('path');

/* Check each component for a existing css file.
For each css file add a relative import to 
a formatted string. Write the string containing
all imports to the page css file containing the components*/

exports.writeCssPage = async function (
  componentFolder, 
  pagePath, 
  pageName,
  fileSystem=fs
) {
  const importCSSStrings = componentFolder.reduce((imports, folder) => {
    const existingCSSFile = folder.dir.find(file => file.match('css'));
    if (existingCSSFile) {
      const relativePath = `@import './components/${folder.name}/${existingCSSFile}'`
      imports += relativePath + '\n';
    }
    return imports;
  })
  
  const cssFilePath = path.join(pagePath, `${pageName}.css`)
  fileSystem.writeFileSync(cssFilePath, importCSSStrings);
};