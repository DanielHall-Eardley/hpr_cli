const { writeCssPage } = require('./writeCssPage');
const { writeJSPage } = require('./writeJSPage');

exports.writePageFiles = function (components, pagePath) {
  const pathArray = pagePath.split('/')
  const pageName = pathArray.at(-1);

  writeCssPage(components, pagePath, pageName);
  writeJSPage(components, pagePath, pageName)
};