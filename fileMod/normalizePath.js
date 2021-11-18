const pathModule = require('path')

exports.normalizePath = function (fileName, dirPath, path = pathModule) {
  const normalizePath = path.join(dirPath, fileName);
  return normalizePath;
}