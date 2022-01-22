exports.entryScript = `
function attachEventListeners (interactions=[]) {
  let interactionArray = []
  
  for(let interactionObj of interactions) {
    const objValues = Object.values(interactionObj)
    console.log({objValues})
    if (objValues && objValues.length > 0) {
      interactionArray = [...interactionArray, ...objValues]
    }
  }
  console.log({interactionArray})
  interactionArray.forEach(interaction => {
    const element = document.getElementById(interaction.elementId);
    element.addEventListener(interaction.eventType, interaction.fn);
  })
}

onload = attachEventListeners(interactions)
`

