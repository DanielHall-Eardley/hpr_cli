const { v4: uuid } = require('uuid');

/* Check for interaction and add a persistant uuid to the element */
exports.checkForId = function (htmlElement) {
  const checkForInteraction = htmlElement.dataset.interaction
  let elementId = htmlElement.getAttribute('id');
  if (!elementId && checkForInteraction) {
    htmlElement.setAttribute('id', uuid());
  }

  return htmlElement;
};