const { createInteractionObj } = require('./createInteractionObj.js');
const { addInteraction } = require('./addInteraction.js');
const { parseHtmlElement } = require('./parseHtmlElement');
const { getInteractionFns } = require('./getInteractionFns.js');
const { interactionConstants } = require('../constants.js');
const { INT_SUBMIT, INT_INPUT, INT_UPDATE } = interactionConstants;

exports.createInteraction = function (html, interactionPath, compName) {
  let interactionObj = {
    [INT_SUBMIT]: {},
    [INT_INPUT]: {},
    [INT_UPDATE]: {},
  }
  
  const existingInteractionFns = getInteractionFns(interactionPath);
  const parsedParent = parseHtmlElement(html.parent);
  const interaction = createInteractionObj(parsedParent, existingInteractionFns);
  const newIntObj = addInteraction(interaction, interactionObj);
  interactionObj = newIntObj

  function recurseHtml (parent, children) {
    const array = Array.from(children);
    if (!children || children.length === 0) return

    array.forEach((htmlElement) => {
      const parsedElement = parseHtmlElement(htmlElement, compName); 
      const interaction = createInteractionObj(parsedElement, existingInteractionFns);
      const newIntObj = addInteraction(interaction, interactionObj);
      interactionObj = newIntObj
      
      parent.append(parsedElement);
      recurseHtml(parsedElement, parsedElement.children);
    })
  }

  recurseHtml (parsedParent, html.children)

  return { 
    interactions: interactionObj,
    html: parsedParent
  };
}