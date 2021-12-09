const { interactionConstants } = require('../constants');
const { INT_SUBMIT, INT_INPUT, INT_UPDATE } = interactionConstants;

exports.interactionState = function() {
  let state = {
    [INT_SUBMIT]: {},
    [INT_INPUT]: {},
    [INT_UPDATE]: {},
  }

  return {
    addInteraction(interaction) {
      if (interaction) {
        const { interactionType, id } = interaction;
        state[interactionType][id] = interaction;
      }
    },
    getState() {
      return state;
    }
  }
};