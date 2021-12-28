 
 const interactions = [
    
  ] 
 
function attachEventListeners (interactions=[]) {
  interactions.forEach(interaction => {
    const element = document.getElementById(interaction.id);
    element.addEventListener(interaction.eventType, interaction.fn);
  })
}

onload = attachEventListeners(interactions)
