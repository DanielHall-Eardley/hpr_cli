/* Remove the block brackets and extra
newline characters added by the Function contstructor */
exports.formatFnBody = function (array) {
  const removeChar = /\}|\{|\n/g;
  const stringArray = [...array];
  const fnBodyStart = stringArray.shift();
  const fnBodyEnd = stringArray.pop();
  const sanitizedFnStart = fnBodyStart.replace(removeChar, '');
  const sanitizedFnEnd = fnBodyEnd.replace(removeChar, '');
  const createFnBodyString = [
    sanitizedFnStart, 
    ...stringArray, 
    sanitizedFnEnd
  ].join(' ');
  return createFnBodyString;
};
