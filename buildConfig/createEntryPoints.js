exports.createEntryPoints = function (pages, rootDir) {
  const entryPoints = pages.reduce((array, pageName) => {
    const baseEntryPoint = `./${rootDir}/pages/${pageName}/${pageName}`
    const jsEntryPoint = `${baseEntryPoint}.js`
    const cssEntryPoint = `${baseEntryPoint}.css`

    const newArray = [...array, jsEntryPoint, cssEntryPoint];
    return newArray;
  }, [])

  return entryPoints;
}