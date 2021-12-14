function classNameState (newClassNames) {
  classNames = {...newClassNames};

  return {
    updateClassName(id) {
      if (classNames[id]) {
        const newClassName = `.${classNames[id]}`;
        classNames[id] = null;
        return newClassName;
      }

      return null;
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
    const checkId = string.split('_')[2];
    if (checkId) {
      const newClassName = state.updateClassName(checkId);
      return newClassName ?? '\n';
    }

    return string;
  })

  return updatedCSS;
}

/* Seperate the css in to an array of strings,
check each string to find out if it is a className.
If it is a className, replace it with latest className
from the parsed html by comparing the unique ids
embedded into the classNames */
exports.updateCSS = function (css, classNames) {
  const stringArray = css.split(' ');
  console.log(stringArray)
  const state = classNameState(classNames);
  const updatedCSS = updateClassNames(stringArray, state);


  const newClassNames = state.getNewClassNames()
  const addNewCss = newClassNames.map(className => {
    return `.${className} 
{

}

`;
  });

  const newCssFile = [...updatedCSS, ...addNewCss].join(' ');
  return newCssFile;
};