const { createInteractionObj } = require('./createInteractionObj.js');
const { updateCSS } = require('./updateCSS.js');
const { interactionState } = require('./interactionState.js');
const { CSSState } = require('./cssState.js');
const { parseHtmlElement } = require('./parseHtmlElement');
const { readFiles } = require('../fileMod/readFiles.js');
const { importInteractions } = require('./importInteractions');

exports.parse = async function (html, basePath) {
  const intState = interactionState();
  const cssState = CSSState();
  const existingInteractions = await importInteractions(basePath);
  const compName = basePath.split('/').at(-1);
  const cssFile = readFiles(basePath, [compName], 'css')[0];

  function recurseHtml (parent) {
    const children = Array.from(parent.children);
    if (!children || children.length === 0) return

    children.forEach((childHtmlElement) => {
      const parsedElement = parseHtmlElement(childHtmlElement, compName); 
      const interaction = createInteractionObj(parsedElement, existingInteractions);
      intState.addInteraction(interaction);
      const className = parsedElement.className;
      cssState.addClassName(className);
      parent.append(parsedElement);
      recurseHtml(parsedElement);
    })
  }

  recurseHtml(html);

  /* The component html is wrapped in body tag 
  to be able to use js to manipulate. All components must
  be wrapped in one html element to retain the entire component. */
  const componentHtmlEntry = html.children[0];
  const updatedCSS = updateCSS(cssFile.data, cssState.getClassNames());

  return { 
    css: updatedCSS,
    interactions: intState.getState(),
    html: componentHtmlEntry
  };
}