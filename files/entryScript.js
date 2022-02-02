exports.entryScript = `
/* Convert multiple base objects containing objects
into one array of objects as long as the base object 
are not empty */
function convertObjectsToArray (arrayOfObjects) {
  let reducedArray = [];

  for(let interactionObj of arrayOfObjects) {
    const objValues = Object.values(interactionObj);
    if (objValues && objValues.length > 0) {
      reducedArray = [...reducedArray, ...objValues]
    }
  }

  return reducedArray;
}

/* Find a html element by id, add an event listener, 
event type and callback function */
function addInteractionToHTML (interactionArray) {
  interactionArray.forEach(interaction => {
    const element = document.getElementById(interaction.elementId);
    element.addEventListener(interaction.eventType, interaction.fn);
  });
}


function attachEventListeners (interactions=[]) {
  const interactionArray = convertObjectsToArray(interactions);
  addInteractionToHTML(interactionArray);
}

onload = attachEventListeners(interactions);
`

