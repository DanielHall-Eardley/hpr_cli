const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { format } = require('prettier');
const fs = require('fs');

exports.writeHTMLComponent = function (html, htmlPath) {
  const dom = new JSDOM(`<body></body>`);
  const mockBody = dom.window.document.body;
  mockBody.append(html);
  const stringifiedHtml = format(mockBody.innerHTML, { parser: 'html'});
  fs.writeFileSync(htmlPath, stringifiedHtml);
};