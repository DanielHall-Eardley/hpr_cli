const fs = require('fs');
const path = require('path')
const { writeHTMLComponent } = require('./writeHTMLComponent');
const { createCompFilePath } = require('./createCompFilePath');

exports.writeComponent = async function(data, basePath) {
  const htmlFilePath = createCompFilePath(basePath, 'ejs');
  writeHTMLComponent(data.html, htmlFilePath)
  const cssFilePath = createCompFilePath(basePath, 'css');
  fs.writeFileSync(cssFilePath, data.css);

  const fileKeys = Object.keys(data.interactions);
  fileKeys.forEach(fileName => {
    const filePath = path.join(basePath, `${fileName}.js`);
    import('stringify-object')
      .then(module => {
        const stringifyObject = module.default;
        const fileData = stringifyObject(
          data.interactions[fileName], 
          { indent: '  ', inlineCharacterLimit: 30 }
        );
        const addExport = `module.exports = ${fileData};`
        fs.writeFileSync(filePath, addExport)
      })
  })
}