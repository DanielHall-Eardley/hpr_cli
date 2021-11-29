const { interactionCb } = require('./interactionCb.js');
const { interactionConstants } = require('../constants.js');
const { INT_UPDATE } = interactionConstants;

exports.createInteractionObj = function (htmlElement, existingInteractionFns) {
  const interactionType = htmlElement.dataset.interaction;
  if (interactionType) {
    let eventType = htmlElement.dataset.eventType;
    const name = htmlElement.dataset.name;
    const elementId = htmlElement.getAttribute('id');
    const interactionType = htmlElement.dataset.interaction
    const existingFn = existingInteractionFns[elementId];
    const fn = interactionCb(interactionType, existingFn);

    if (interactionType === INT_UPDATE) {
      eventType = INT_UPDATE
    }

    const interactionObj = {
      interactionType,
      id: elementId,
      eventType,
      name,
      fn 
    };
  
    return interactionObj
  }
  
  return null;
}
