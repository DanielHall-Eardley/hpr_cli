exports.entryScript = `
  /* On page load attach event listeners to
  dom elements base on a array of configuration objects */
  function addEventListeners(interactions) {
    interactions.forEach(interaction => {
      const element = document.getElementById(interaction.id);
      element.addEventListener(interaction.eventType, interaction.fn);
    }) 
  }
`

