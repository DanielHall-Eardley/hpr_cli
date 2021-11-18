const fs = require('fs');
const path = require('path')
const { interactionConstants } = require('../constants.js');
const { INT_SUBMIT, INT_INPUT, INT_UPDATE } = interactionConstants;

const interactionFiles = [
  INT_INPUT,
  INT_SUBMIT,
  INT_UPDATE
];

exports.getInteractions = function (folderPath, interactions=interactionFiles) {
  const existingFiles = interactions.reduce((obj, fileName) => {
    try {
      const filePath = path.join(folderPath, `${fileName}.js`)

      //check if file exists
      fs.accessSync(filePath, fs.constants.F_OK);
      const fileData = fs.readFileSync(filePath, {encoding: 'utf8'});
      console.log(fileData);
      const interactionObjects = parseInteraction(fileData)
      obj[fileName] = interactionObjects;
    } catch (err) {
      // console.log(err)
    } finally {
      // return the empty object if file does not exist
      return obj
    }
  }, {
    [INT_UPDATE]: {},
    [INT_SUBMIT]: {},
    [INT_INPUT]: {}
  })
  
  return existingFiles;
}