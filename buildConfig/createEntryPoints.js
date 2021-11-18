exports.createEntryPoints = function (pages) {
  const entryPoints = pages.reduce((array, folderName) => {
    const cssEntryPoint = `./pages/${folderName}.css`
    const jsEntryPoint = `./pages/${folderName}.js`

    array = [...array, jsEntryPoint, cssEntryPoint];
    return array;
  }, [])

  return entryPoints;
}