const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = require("jsdom");

exports.getHtmlElements = function (html) {
  const document = new dom.JSDOM(`<div></div>`).window.document;
  const div = document.querySelector('div');
  div.innerHTML = html;
  return div;
}