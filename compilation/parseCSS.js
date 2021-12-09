const { formatBody } = require('./formatBody.js');
const { removeQuotes } = require('./removeQuotes');

function checkForId (string) {
  const id = string.split('_')[2];
  return id;
}

function parseState (array) {
  const stringArray = array;
  const css = {};
  let id = null;
  let bodyStart = null;

  return {
    checkMatch(cssIndex) {
      const currentString = stringArray.at(cssIndex)

      if (checkForId(currentString)) {
        id = checkForId(currentString)
      }

      if (id && currentString.match('{')) {
        bodyStart = cssIndex + 1;
      }
        
      if (id && bodyStart && currentString.match('}')) {
        const bodyEnd = cssIndex + 1;
        const existingCSSBody = stringArray.slice(bodyStart, bodyEnd);
        const sanitizedCSSBody = formatBody(existingCSSBody);
        const sanitizedId = removeQuotes(id);
        css[sanitizedId] = sanitizedCSSBody;
        id = null;
        bodyStart = null;
      }
    },
    getCSS() {
      return css;
    }
  }
}

exports.parseCSS = function (dataString) {
  const stringArray = dataString.toString().split(' ');
  const state = parseState(stringArray);
  console.log(stringArray)
  for (let index = 0; index < stringArray.length; index += 1) {
    state.checkMatch(index);
  }

  return state.getCSS();
};