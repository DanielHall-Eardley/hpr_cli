const { formatBody } = require('./formatBody.js');

function trimBracket (bracketString) {
  const findBracketindex = bracketString.findIndex(char => char === '}');
  const trimString = bracketString.slice(0, findBracketindex);
  return trimString;
}

function checkForId (string) {
  const stringArray = string.split('_');
  const id = stringArray[2]
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

      if (id && bodyStart && currentString.match('}')) {
        const bodyEnd = cssIndex + 1;
        const existingCSSBody = stringArray.slice(bodyStart, bodyEnd);
        console.log(existingCSSBody)
        const sanitizedCSSBody = formatBody(existingCSSBody);
        console.log(existingCSSBody)
        css[id] = sanitizedCSSBody;
        id = null;
        bodyStart = null;
      }
     
      if (checkForId(currentString)) {
        id = checkForId(currentString)
      }

      if (id && currentString.match('{')) {
        bodyStart = cssIndex + 1;
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
  for (let index = 0; index < stringArray.length; index += 1) {
    state.checkMatch(index);
  }

  return state.getCSS();
};