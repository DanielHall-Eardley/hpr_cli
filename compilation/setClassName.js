const { v4: uuid } = require('uuid');
const { NO_SCOPED } = require('../constants')
  
//create css name structure = [componentName]_[className]_[uuid]
exports.setClassName = function (htmlElement, compName) {
  let className = htmlElement.className;
  const classNameArray = className.split('_');
  if (classNameArray[1] === NO_SCOPED) {
    return htmlElement;
  }
  
  let id = classNameArray[2];
  if (id) {
    className = classNameArray[1];
  } 

  if (!id) {
    id = uuid();
  }

  const scopedString = `${compName}_${className}_${id}`
  htmlElement.className = scopedString;

  return htmlElement
};