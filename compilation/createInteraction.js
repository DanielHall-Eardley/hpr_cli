const { createInteractionObj } = require('./createInteractionObj.js');
const { checkForInteraction } = require('./checkForInteraction');
const { interactionConstants } = require('../constants.js');
const { INT_SUBMIT, INT_INPUT, INT_UPDATE } = interactionConstants;

//need to recurse through html to get nested elements
exports.createInteraction = function (html, existingInteractions) {
  const fileData = {
    [INT_UPDATE]: {},
    [INT_SUBMIT]: {},
    [INT_INPUT]: {}
  }

  const [checkedParent, interactionType] = checkForInteraction(html.parent); 
  if (interactionType) {
    const parentId = htmlElement.getAttribute('id');
    const interaction = createInteractionObj(checkedParent);
    fileData[interactionType][parentId] = interaction;
  }

  function recurseHtml (parent, children) {
    const array = Array.from(children);
    if (!children || children.length === 0) return

    array.forEach((htmlElement) => {
      const [checkedElement, interactionType] = checkForInteraction(htmlElement); 
      const elementId = htmlElement.getAttribute('id');
      
      if (interactionType) {
        const existingInteractionFn = existingInteractions[interactionType][elementId];
        if (existingInteractionFn) {
          // merge existing fn into new object
        } else {
          const interaction = createInteractionObj(checkedElement);
          fileData[interactionType][elementId] = interaction;
        }
      }
 
      parent.append(checkedElement);
      recurseHtml(checkedElement, checkedElement.children);
    })
  }

  recurseHtml (checkedParent, html.children)
  return { 
    interactions: fileData, 
    html: checkedParent 
  };
}