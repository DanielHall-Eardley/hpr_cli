const { createInteractionObj } = require('./createInteractionObj.js');
const { createCssClass } = require('./createCssClass.js');
const { interactionState } = require('./interactionState.js');
const { CSSState } = require('./cssState.js');
const { parseHtmlElement } = require('./parseHtmlElement');
const { readFiles } = require('../fileMod/readFiles.js');
const { interactionConstants } = require('../constants.js');
const { INT_SUBMIT, INT_INPUT, INT_UPDATE } = interactionConstants;

const interactionFiles = [
  INT_INPUT,
  INT_SUBMIT,
  INT_UPDATE
];

exports.parse = function (html, basePath) {
  const intState = interactionState();
  const cssState = CSSState();
  const existingInteractionFns = readFiles(basePath, interactionFiles, 'js');
  const compName = basePath.split('/').at(-1);
  const existingCss = readFiles(basePath, [compName], 'css');

  function recurseHtml (parent) {
    const children = Array.from(parent.children);
  if (!children || children.length === 0) return

    children.forEach((childHtmlElement) => {
      const parsedElement = parseHtmlElement(childHtmlElement, compName); 
      const interaction = createInteractionObj(parsedElement, existingInteractionFns);
      intState.addInteraction(interaction);
      const cssClass = createCssClass(parsedElement, existingCss);
      cssState.addCss(cssClass);
      parent.append(parsedElement);
      recurseHtml(parsedElement);
    })
  }

  recurseHtml(html);

  /* The component html is wrapped in body tag 
  to be able to use js to manipulate. All components must
  be wrapped in one html element to retain the entire component. */
  const componentHtmlEntry = html.children[0];

  return { 
    css: cssState.getState(),
    interactions: intState.getState(),
    html: componentHtmlEntry
  };
}