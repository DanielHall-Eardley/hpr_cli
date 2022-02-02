exports.createEntryPoints = function (pages) {
  const globalCSS = './global/global.css';
  const defaultEntryPoints = [globalCSS];

  const entryPoints = pages.reduce((array, pageName) => {
    const baseEntryPoint = `./pages/${pageName}/${pageName}`
    const jsEntryPoint = `${baseEntryPoint}.js`
    const cssEntryPoint = `${baseEntryPoint}.css`

    const newArray = [...array, jsEntryPoint, cssEntryPoint];
    return newArray;
  }, defaultEntryPoints);

  return entryPoints;
}