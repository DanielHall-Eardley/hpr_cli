const fs = require("fs");
const path = require("path");

/* 
Import all the files that the input and submit 
interaction files and put them into an array.
*/
function createJSImports(interactionFiles, reduceObj, folderName) {
  for (let file of interactionFiles) {
    const fileType = file.split(".")[0];
    const fileName = `${fileType}_${folderName}`;
    reduceObj.imports += `import ${fileName} from './components/${folderName}/${file}' \n`;
    reduceObj.fileArray = [...reduceObj.fileArray, fileName];
  }

  return reduceObj;
}

// Seperate the old imports from the rest of the existing file
function removeOldImports(existingFile) {
  const removeImports = existingFile.split("//<!>")[2];
  return removeImports;
}

/* 
  Update the imports but maintain
  the rest of the existing file as is
*/
function createJSFile(importObject, existingFile) {
  const stringifiedArray = `const interactions = [
    ${importObject.fileArray.toString()}
  ]`;

  const importSection = `//<!>\n${importObject.imports}\n${stringifiedArray}\n//<!>`;
  const file = `${importSection}\n${existingFile}`;
  return file;
}

exports.writeJSPage = async function (
  componentFolder,
  pagePath,
  pageName,
  fileSystem = fs
) {
  const importObject = componentFolder.reduce(
    (obj, folder) => {
      const interactionFiles = folder.dir.filter((file) => {
        return file.match("input") || file.match("submit");
      });

      if (interactionFiles?.length > 0) {
        const newObj = createJSImports(interactionFiles, obj, folder.name);
        return newObj;
      }

      return obj;
    },
    {
      imports: "",
      fileArray: [],
    }
  );

  const jsFilePath = path.join(pagePath, `${pageName}.js`);
  const existingFile = fileSystem.readFileSync(jsFilePath).toString();
  const removeOldImportsFromFile = removeOldImports(existingFile);
  const jsFile = createJSFile(importObject, removeOldImportsFromFile);
  fileSystem.writeFileSync(jsFilePath, jsFile);
};
