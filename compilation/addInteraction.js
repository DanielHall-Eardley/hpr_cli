exports.addInteraction = function(interaction, obj) {
  if (interaction) {
    const { interactionType, id } = interaction;
    obj[interactionType][id] = interaction;
  }

  return obj
};