const fs = require('fs');
const path = require('path');

exports.writeJSPage = async function (
  componentFolder, 
  pagePath, 
  pageName,
  fileSystem=fs
) {
  const importCSSStrings = componentFolder.reduce((imports, folder) => {
    const interactionFiles = folder.dir.filter(file => {
      return file.match('input') || file.match('submit');
    });

    if (interactionFiles?.length > 0) {
      const relativePaths = interactionFiles.map(file => {
        const relativePath = `import  './components/${folder.name}/${existingCSSFile}'`
      })

      imports += relativePath + '\n';
    }

    return imports;
  })
  
  const cssFilePath = path.join(pagePath, `${pageName}.css`)
  fileSystem.writeFileSync(cssFilePath, importCSSStrings);
};