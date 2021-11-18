const { interactionCb } = require('./interactionCb.js');
const { interactionConstants } = require('../constants.js');
const { INT_UPDATE } = interactionConstants;

exports.createInteractionObj = function (htmlElement) {
  let eventType = htmlElement.dataset.eventType;
  const name = htmlElement.dataset.name;
  const interactionType = htmlElement.dataset.interaction

  if (interactionType === INT_UPDATE) {
    eventType = INT_UPDATE
  }

  return {
    eventType,
    name,
    fn: interactionCb(interactionType, name) 
  }
}
