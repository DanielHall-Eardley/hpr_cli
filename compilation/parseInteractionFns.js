/* data structure
  [interactionType]: {
    id: {
      id: [id]
      name: [data.name]
      listener: [fn]
      eventType: [type]
    }
  }
} */
const { formatFnBody } = require('./formatFnBody.js');
const { removeQuotes } = require('./removeQuotes');

exports.parseInteractionFns = function (fileData) {
  const array = fileData.toString().split(' ');
  const existingInteractions = array.slice(3)
  const interactionFns = {};
  let id = null;
  let insideFn = null
  let fnStart = null;
  let fnEnd = null;

  for (let index = 0; index < existingInteractions.length; index += 1) {
    const currentString = existingInteractions[index];
   
    if (id && insideFn && fnStart && fnEnd) {
      const existingFnBody = existingInteractions.slice(fnStart, fnEnd);
      const sanitizedFnBody = formatFnBody(existingFnBody);
      const sanitizedId = removeQuotes(id);
;     interactionFns[sanitizedId] = sanitizedFnBody;
      id = null;
      insideFn = null
      fnStart = null;
      fnEnd = null;
    }

    if (currentString.match('id:')) {
      id = existingInteractions[index + 1];
    }

    if (id && currentString.match('function')) {
      insideFn = true;
    }

    if (id && insideFn && currentString.match('{')) {
      fnStart = index;
    }

    if (id && insideFn && fnStart && currentString.match('}')) {
      fnEnd = index + 1;
    }
  }
  return interactionFns;
};