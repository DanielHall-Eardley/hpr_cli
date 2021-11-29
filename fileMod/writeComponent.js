const fs = require('fs');
const path = require('path')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { format } = require('prettier');

exports.writeComponent = async function(data, htmlPath, interactionPath) {
  const dom = new JSDOM(`<body></body>`);
  const mockBody = dom.window.document.body;
  mockBody.append(data.html);
  const stringifiedHtml = format(mockBody.innerHTML, { parser: 'html'});
  fs.writeFileSync(htmlPath, stringifiedHtml);
  
  const fileKeys = Object.keys(data.interactions);
  fileKeys.forEach(fileName => {
    const filePath = path.join(interactionPath, `${fileName}.js`);
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