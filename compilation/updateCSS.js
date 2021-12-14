function classNameState (newClassNames) {
  let classNames = {...newClassNames};

  return {
    updateClassName(existingClassName, id) {
      /* Check if the existing css class 
      still has a className attached to a html element. */
      if (classNames[id]) {
        const existingString = existingClassName.split('.')[0];
        const newClassName = `${existingString}.${classNames[id]}`;
        classNames[id] = null;
        return newClassName;
      }

      return '\n';
    },
    getNewClassNames() {
      const objectKeys = Object.keys(classNames);
      const newClassNameArray = [];
      for (let key of objectKeys) {
        const className = classNames[key]
        if (className) {
          newClassNameArray.push(className)
        }
      }

      return newClassNameArray;
    }
  }
}

function updateClassNames (existingCSS, state) {
  const updatedCSS = existingCSS.map(string => {
    const id = string.split('_')[2];
    if (id) {
      const newClassName = state.updateClassName(string, id);
      return newClassName;
    }

    return string;
  })

  return updatedCSS;
}

function addNewCSS (newClassNames) {
  const newCSS = newClassNames.map(className => {
    return `.${className} 
{

}

`;
  });

  return newCSS;
}

/* Seperate the css in to an array of strings,
check each string to find out if it is a className.
If it is a className, replace it with latest className
from the parsed html by comparing the unique ids
embedded into the classNames */
exports.updateCSS = function (css, classNames) {
  const stringArray = css.split(' ');
  const state = classNameState(classNames);
  const updatedCSS = updateClassNames(stringArray, state);
  const newClassNames = state.getNewClassNames()
  const newCss = addNewCSS(newClassNames);
  const newCssFile = [...updatedCSS, ...newCss].join(' ');
  return newCssFile;
};