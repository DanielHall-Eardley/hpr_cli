const { createInteractionObj } = require('./createInteractionObj.js');
const { interactionState } = require('./interactionState.js');
const { importInteractions } = require('./importInteractions');

exports.parse = async function (html, basePath) {
  const intState = interactionState();
  const existingInteractions = await importInteractions(basePath);

  function recurseHtml (parent) {
    const children = Array.from(parent.children);
    if (!children || children.length === 0) return

    children.forEach((childHtmlElement) => {
      const interaction = createInteractionObj(childHtmlElement, existingInteractions);
      intState.addInteraction(interaction);
      recurseHtml(childHtmlElement);
    })
  }

  recurseHtml(html);

  return { 
    interactions: intState.getState(),
  };
}