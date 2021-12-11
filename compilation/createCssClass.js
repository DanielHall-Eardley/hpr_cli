exports.createCssClass = function(htmlElement, existingClasses) {
  const className = htmlElement.className;
  if (!className) return null;
  const classId = className.split('_')[2];
  const existingCss = existingClasses[classId] ?? '';
  const classString = `.${className} {
    ${existingCss}
}\n`
  return classString;
};