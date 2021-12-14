const { interactionCb } = require('./interactionCb.js');
const { parseInteractionAttributes } = require('./parseInteractionAttributes');

function getInteractionFn (interactions, id) {
  if (interactions[id]) {
    return interactions[id].fn;
  }

  return null;
}

exports.createInteractionObj = function (htmlElement, existingInteractionFns) {
  const interaction = parseInteractionAttributes(htmlElement);
  if (interaction.interactionType) {
    const existingFn = getInteractionFn(existingInteractionFns, interaction.elementId);
    const fn = interactionCb(interaction.interactionType, existingFn);

    const interactionObj = {
      ...interaction,
      fn 
    };
  
    return interactionObj;
  }
  
  return null;
};
