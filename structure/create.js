import { dirStructure } from "./base";
import { makeDir } from './makeDir';

function create (dirStructure) {
  dirStructure.forEach(dir => {
    /* a string element signifies the creation
    of an empty folder */
    if(typeof dir === 'string') {
      makeDir(dir);
    } else {
      makeDir(dir.name);

    }
  })
}