exports.createCompFiles = function (name) {
  const htmlFile = `${name}.ejs`
  const cssFile = `${name}.css`;
  return [htmlFile, 'update.js', 'interaction.js', cssFile];
};