exports.CSSState = function() {
  let state = '';

  return {
    addCss(className) {
      if (className) {
        state += `${className}\n`
      }
    },
    getState() {
      return state;
    }
  }
};