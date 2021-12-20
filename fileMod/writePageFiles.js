const { writeCssPage } = require('./writeCssPage');
const { writeJSPage } = require('./writeJSPage');

exports.writePage = function (components, pagePath) {
  const pathArray = pagePath.split('/')
  const pageName = pathArray.at(-1);

  writeCssPage(components, pagePath, pageName);
  writeJSPage(components, pagePath, pageName)
};