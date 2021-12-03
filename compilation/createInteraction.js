const { createInteractionObj } = require('./createInteractionObj.js');
const { addInteraction } = require('./addInteraction.js');
const { checkForId } = require('./checkForId');
const { getInteractionFns } = require('./getInteractionFns.js');
const { interactionConstants } = require('../constants.js');
const { INT_SUBMIT, INT_INPUT, INT_UPDATE } = interactionConstants;

exports.createInteraction = function (html, interactionPath, ) {
  let interactionObj = {
    [INT_SUBMIT]: {},
    [INT_INPUT]: {},
    [INT_UPDATE]: {},
  }
  
  const existingInteractionFns = getInteractionFns(interactionPath);
  const checkedParent = checkForId(html.parent);
  const interaction = createInteractionObj(checkedParent, existingInteractionFns);
  const newIntObj = addInteraction(interaction, interactionObj);
  interactionObj = newIntObj

  function recurseHtml (parent, children) {
    const array = Array.from(children);
    if (!children || children.length === 0) return

    array.forEach((htmlElement) => {
      const checkedElement = checkForId(htmlElement); 
      const interaction = createInteractionObj(checkedElement, existingInteractionFns);
      const newIntObj = addInteraction(interaction, interactionObj);
      interactionObj = newIntObj
      
      parent.append(checkedElement);
      recurseHtml(checkedElement, checkedElement.children);
    })
  }

  recurseHtml (checkedParent, html.children)

  return { 
    interactions: interactionObj,
    html: checkedParent 
  };
}