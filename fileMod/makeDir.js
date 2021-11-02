const { mkdirSync } = require('fs');

exports.makeDir = function (
  absolutePath, 
  createDir = mkdirSync
) {
  createDir(absolutePath);
}