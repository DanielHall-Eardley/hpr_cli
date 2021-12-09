/* Remove the block brackets and extra
newline characters added by the Function contstructor */
exports.formatBody = function (array) {
  const removeChar = /\}|\{|\n/g;
  const stringArray = [...array];
  const bodyStart = stringArray.shift();
  const bodyEnd = stringArray.pop() ?? '';
  const sanitizedFnStart = bodyStart.replace(removeChar, '');
  const sanitizedFnEnd = bodyEnd.replace(removeChar, '');
  const createBodyString = [
    sanitizedFnStart, 
    ...stringArray, 
    sanitizedFnEnd
  ].join(' ');
  return createBodyString;
};
