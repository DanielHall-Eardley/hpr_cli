const { interactionConstants } = require('../constants.js');
const { INT_UPDATE } = interactionConstants;

exports.parseInteractionAttributes = function (htmlElement) {
  const interactionType = htmlElement.dataset.interaction;
  let eventType = htmlElement.dataset.eventType;
  const name = htmlElement.dataset.name;
  const elementId = htmlElement.getAttribute('id');

  if (interactionType === INT_UPDATE) {
    eventType = INT_UPDATE
  };

  const interactionObject = {
    interactionType,
    eventType,
    name,
    elementId
  };

  return interactionObject;
}