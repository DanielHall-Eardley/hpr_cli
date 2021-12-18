const { interactionConstants } = require('../constants');
const { INT_SUBMIT, INT_INPUT } = interactionConstants;

exports.interactionState = function() {
  let state = {
    [INT_SUBMIT]: {},
    [INT_INPUT]: {}
  }

  return {
    addInteraction(interaction) {
      if (interaction) {
        const { interactionType, elementId } = interaction;
        state[interactionType][elementId] = interaction;
      }
    },
    getState() {
      return state;
    }
  }
};