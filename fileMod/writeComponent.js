const fs = require('fs');
const path = require('path')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

exports.writeComponent = function(data, htmlPath, interactionPath) {
  const dom = new JSDOM(`<body></body>`);
  const mockBody = dom.window.document.body;
  mockBody.append(data.html);
  const stringHtml = mockBody.innerText;
  fs.writeFileSync(htmlPath, stringHtml);
  const fileKeys = Object.keys(data.interactions);

  fileKeys.forEach(fileName => {
    const filePath = path.join(interactionPath, `${fileName}.js`);
    const fileData = data.interactions[fileName];
    fs.writeFileSync(filePath, fileData)
  })
}