const { makeDir } = require('../fileMod/makeDir.js');
const { makeFiles } = require('../fileMod/makeFiles');
const { normalizePath } = require('../fileMod/normalizePath');
const { getName } = require('../fileMod/getName');

/* This function expects an array with
elements that are either a string or object
the string represents an empty folder, whereis an
onject can have files and subfolders. */
function create (
  dirStructure,
  rootDir,
  createDir = makeDir,
  createFiles = makeFiles
) {
  if (!rootDir) {
    throw new Error('Must specify project name')
  }

  dirStructure.forEach(dir => {
    const dirName = getName(dir);
    const dirPath = normalizePath(dirName, rootDir);
    createDir(dirPath);

    if (dir.files) {
      createFiles(dir.files, dirPath);
    }

    if (dir.folders) {
      create(dir.folders, dirPath);
    }
  })
}

exports.create = create;

/* todo fix path so that it resolves the proper struture */