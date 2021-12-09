const path = require('path')

exports.createCompFilePath = function(basePath, extension) {
  const compName = basePath.split('/').at(-1);
  const filePath = path.join(basePath, `${compName}.${extension}`);
  return filePath;
};