const { writeCssPage } = require('./writeCssPage');

exports.writePage = function (components, pagePath) {
  writeCssPage(components, pagePath);
};