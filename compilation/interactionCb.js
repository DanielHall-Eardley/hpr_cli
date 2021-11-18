const { interactionConstants } = require('../constants.js');
const { INT_SUBMIT, INT_INPUT } = interactionConstants;

exports.interactionCb = function (interactionType, name) {
  const fnBody = ` {

  }`

  if (interactionType === INT_SUBMIT || interactionType === INT_INPUT) {
    return `function ${name}_${interactionType}(event)${fnBody}`
  }

  return `function ${name}_${interactionType}(element, data)${fnBody}`
}