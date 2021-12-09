const { formatBody } = require('./formatBody.js');
const { removeQuotes } = require('./removeQuotes');

function parseState (array) {
  const stringArray = array;
  const matchArray = ['id:', 'function', '{', '}'];
  let currentIndex = 0;
  const interactionFns = {};
  let id = null;
  let fnStart = null;

  return {
    checkMatch(interactionIndex) {
      const currentString = stringArray.at(interactionIndex)
      const currentMatch = matchArray.at(currentIndex);
      if (currentString.match(currentMatch)) {
        if (currentIndex === 0) {
          id = stringArray.at(interactionIndex + 1);
        }
        
        if (currentIndex === 2) {
          fnStart = interactionIndex
        }

        if (currentIndex === 3) {
          const fnEnd = interactionIndex + 1;
          const existingFnBody = stringArray.slice(fnStart, fnEnd);
          const sanitizedFnBody = formatBody(existingFnBody);
          const sanitizedId = removeQuotes(id);
          interactionFns[sanitizedId] = sanitizedFnBody;
          currentIndex = 0;
          return;
        }

        currentIndex += 1
      }
    },
    getInteractionFns() {
      return interactionFns
    }
  }
}

exports.parseInteractionFns = function (dataString) {
  const array = dataString.toString().split(' ');
  const existingInteractions = array.slice(3)
  const state = parseState(existingInteractions);

  for (let index = 0; index < existingInteractions.length; index += 1) {
    state.checkMatch(index);
  }

  return state.getInteractionFns;
};