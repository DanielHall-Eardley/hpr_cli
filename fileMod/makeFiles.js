const { writeFileSync } = require("fs");
const { normalizePath } = require('./normalizePath');
const { getName } = require('./getName');

/* creates files = require an array.
a string element indicates and empty file,
an onject indicates a file with data to be written */
exports.makeFiles = function (
  fileArray, 
  dirPath,
  createFile = writeFileSync,
) {
  fileArray.forEach(file => {
    const fileName = getName(file);
    const absolutePath = normalizePath(fileName, dirPath);
    const fileData = file.data ?? '';
    createFile(absolutePath, fileData);
  })
};