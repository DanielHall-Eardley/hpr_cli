exports.createPageFiles = (name) {
  const htmlName = `${name}.ejs`;
  const jsName = `${name}.js`;
  const cssName = `${name}.css`;
  return [htmlName, jsName, cssName];
}