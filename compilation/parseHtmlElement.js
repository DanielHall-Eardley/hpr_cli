const { setId } = require('./setId');
const { setClassName } = require('./setClassName');

/* Check for for interaction attributes and a class attribute,
return a html element with updated attributes */
exports.parseHtmlElement = function (htmlElement, compName) {
  const checkForInteraction = htmlElement.dataset.interaction;
  const checkForClass = htmlElement.className;
  let newElement = htmlElement;

  if (checkForInteraction) {
    newElement = setId(htmlElement);
  }

  if (checkForClass) {
    newElement = setClassName(htmlElement, compName);
  }

  return newElement;
};