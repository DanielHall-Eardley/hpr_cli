const { setId } = require('./setId');
const { setClassName } = require('./setClassName');
const { parseInteractionAttributes } = require('./parseInteractionAttributes');

/* Check for for interaction attributes and a class attribute,
return a html element with updated attributes */
exports.parseHtmlElement = function (htmlElement, compName) {
  const checkForClass = htmlElement.className;
  const interaction = parseInteractionAttributes(htmlElement);
  let newElement = htmlElement;

  if (interaction.interactionType) {
    newElement = setId(htmlElement);
  }

  if (checkForClass) {
    newElement = setClassName(htmlElement, compName);
  }

  return newElement;
};