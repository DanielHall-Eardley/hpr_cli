exports.entryScript = function () {
  /* On page load attach event listeners to
  dom elements base on a array of configuration objects */
  const fnBody = `interactions.forEach(interaction => {
    const element = document.getElementById(interaction.id);
    element.addEventListener(interaction.eventType, interaction.fn);
})`

  const addInteractionListeners = new Function ('interactions', fnBody)
  return addInteractionListeners;
}

