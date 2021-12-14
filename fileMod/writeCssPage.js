const { writeFileSync, constants} = require('fs');
const { access } = require('fs/promises');
const path = require('path');

/* Check each component for a existing css file.
For each css file add a relative import to 
a formatted string. Write the string containing
all imports to the page css file containing the components*/

exports.writeCssPage = async function (
  components, 
  pagePath, 
  writeFile=writeFileSync,
  accessFile=access,
  fsConstants=constants
) {
  let importCssStrings = ''
  for (let compName of components) {
    const cssFilePath = path.join(pagePath, 'components', compName, `${compName}.css`);
    const checkForFile = await accessFile(cssFilePath, fsConstants.F_OK);
    console.log(checkForFile)
    if (!checkForFile) {
      const importString = `@import '${cssFilePath}'\n`;
      importCssStrings += importString;
    } 
  }

  const pathArray = pagePath.split('/')
  const pageName = pathArray.at(-1);
  const cssFilePath = path.join(pagePath, `${pageName}.css`)
  writeFile(cssFilePath, importCssStrings);
};