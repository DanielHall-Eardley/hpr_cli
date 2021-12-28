const fs = require("fs");
const { getName } = require('./getName');
const path = require('path');

/* creates files = require an array.
a string element indicates and empty file,
an onject indicates a file with data to be written */
exports.makeFiles = function (
  fileArray, 
  dirPath,
) {
  fileArray.forEach(file => {
    const fileName = getName(file);
    const absolutePath = path.join(dirPath, fileName);
    const fileData = file.data ?? '';
    fs.writeFileSync(absolutePath, fileData);
  })
};