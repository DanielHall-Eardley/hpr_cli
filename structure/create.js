const { makeFiles } = require('../fileMod/makeFiles');
const { getName } = require('../fileMod/getName');
const path = require('path');
const fs = require('fs');


/* This function expects an array with
elements that are either a string or object
the string represents an empty folder, but an
object can have files and subfolders. */
function create (
  dirStructure,
  rootDir,
  createFiles = makeFiles
) {
  if (!rootDir) {
    throw new Error('Must specify root directory')
  }

  dirStructure.forEach(dir => {
    const dirName = getName(dir);
    const dirPath = path.join(rootDir, dirName);
    fs.mkdirSync(dirPath);

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