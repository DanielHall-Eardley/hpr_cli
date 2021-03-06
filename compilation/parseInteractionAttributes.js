exports.parseInteractionAttributes = function (htmlElement) {
  const interactionType = htmlElement.dataset.interaction;
  let eventType = htmlElement.dataset.eventType;
  const name = htmlElement.dataset.name;
  const elementId = htmlElement.classList[0];

  const interactionObject = {
    interactionType,
    eventType,
    name,
    elementId,
  };

  return interactionObject;
};
