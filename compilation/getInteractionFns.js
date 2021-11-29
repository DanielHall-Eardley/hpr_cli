const fs = require('fs');
const path = require('path')
const { parseInteractionFns } = require('./parseInteractionFns');
const { interactionConstants } = require('../constants.js');
const { INT_SUBMIT, INT_INPUT, INT_UPDATE } = interactionConstants;

const interactionFiles = [
  INT_INPUT,
  INT_SUBMIT,
  INT_UPDATE
];

exports.getInteractionFns = function (folderPath, interactions=interactionFiles) {
  const existingFiles = interactions.reduce((obj, fileName) => {
    try {
      const filePath = path.join(folderPath, `${fileName}.js`)
      fs.accessSync(filePath, fs.constants.F_OK);

      const fileData = fs.readFileSync(filePath);
      const interactionFns = parseInteractionFns(fileData)
      obj = {...obj, ...interactionFns };
    } catch (err) {
      // console.log(err)
    } finally {
      return obj
    }
  }, {})
  
  return existingFiles;
}