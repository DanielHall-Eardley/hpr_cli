const { v4: uuid } = require('uuid');

exports.checkForInteraction = function (htmlElement) {
  const interactionType = htmlElement.dataset.interaction;
  let elementId = htmlElement.getAttribute('id');
  if (!elementId) {
    htmlElement.setAttribute('id', uuid());
  }

  return [htmlElement,interactionType];
};