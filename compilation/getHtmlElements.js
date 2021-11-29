const jsdom = require("jsdom");
const { JSDOM } = jsdom;

exports.getHtmlElements = function (html) {
  const dom = new JSDOM(`<body></body>`);
  const mockBody = dom.window.document.body;
  
  mockBody.innerHTML = html;
  const parent = mockBody.children[0];
  const children = parent.children;
  return {
    parent,
    children
  }
}