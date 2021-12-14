const { interactionConstants } = require('../constants.js');
const { INT_SUBMIT, INT_INPUT } = interactionConstants;

/* Create a new fn if none exists, based on the type of interaction. 
Return the existing fn immediately if one exists */
exports.interactionCb = function (interactionType, existingFn) {
  if (existingFn) return existingFn;

  if (interactionType === INT_SUBMIT || interactionType === INT_INPUT) {
    const fn = new Function('event', '');
    return fn;
  }

  const fn = new Function('element', 'data', '');
  return fn;
}