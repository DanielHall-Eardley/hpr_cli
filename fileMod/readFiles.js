const fs = require('fs');
const path = require('path')

exports.readFiles = function (folderPath, fileArray, ext){
  const fileData = fileArray.map(fileName => {
    const filePath = path.join(folderPath, `${fileName}.${ext}`)
    fs.accessSync(filePath, fs.constants.F_OK);
    const data = fs.readFileSync(filePath, {encoding: 'utf8'});
    return {
      fileName,
      data
    };
  })
  
  return fileData;
}