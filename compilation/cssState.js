const { NO_SCOPED } = require('../constants');

/* Object structure:
  {
    [idFromClassName]: [baseClassName]
  }
*/

exports.CSSState = function() {
  let classNames = {};

  return {
    addClassName(className) {
      if (className) {
        const classNameArray = className.split('_');
        const noScope = classNameArray[1]
        const id = classNameArray[2];
        if (id && noScope !== NO_SCOPED) {
          classNames[id] = className;
        }
      }
    },
    getClassNames() {
      return classNames;
    }
  }
};