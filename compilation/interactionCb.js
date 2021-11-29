const { interactionConstants } = require('../constants.js');
const { INT_SUBMIT, INT_INPUT } = interactionConstants;

exports.interactionCb = function (interactionType, fnBody='') {
  
  if (interactionType === INT_SUBMIT || interactionType === INT_INPUT) {
    const fn = new Function('event', fnBody);
    return fn;
  }

  const fn = new Function ('element', 'data', fnBody);
  return fn;
}