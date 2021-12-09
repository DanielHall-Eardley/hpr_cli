const fs = require('fs');
const path = require('path')
const { parseInteractionFns } = require('../compilation/parseInteractionFns');
const { parseCSS } = require('../compilation/parseCSS');

function selectParser (dataString, extensionType) {
  switch (extensionType) {
    case 'css' :
      return parseCSS(dataString);
    case 'js' :
      return parseInteractionFns(dataString);
    default :
      return {};
  }
}

exports.readFiles = function (folderPath, fileArray, ext){
  let fileData = {}
    for (let fileName of fileArray) {
      const filePath = path.join(folderPath, `${fileName}.${ext}`)
      fs.accessSync(filePath, fs.constants.F_OK);
      const dataString = fs.readFileSync(filePath);
      const dataObj = selectParser(dataString, ext);
      fileData = { ...fileData, ...dataObj };
    }
  
  return fileData;
}