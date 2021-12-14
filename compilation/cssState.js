exports.CSSState = function() {
  let classNames = {};

  return {
    addClassName(className) {
      if (className) {
        const id = className.split('_')[2];
        classNames[id] = className;
      }
    },
    getClassNames() {
      return classNames;
    }
  }
};