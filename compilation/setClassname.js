const { v4: uuid } = require('uuid');

//create css name structure = [componentName]_[className]_[uuid]
exports.setClassName = function (htmlElement, compName) {
  const className = htmlElement.classname
  const splitClassName = className.split('_');
  console.log(splitClassName)
  if (splitClassName.length === 2) {
    return htmlElement;
  }

  const scopedString = `${compName}_${className}_${uuid()}`
  htmlElement.className = scopedString;
  return htmlElement
};