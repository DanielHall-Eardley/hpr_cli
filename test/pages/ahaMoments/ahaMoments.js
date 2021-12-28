import input_card from './components/card/input.js' 
import submit_card from './components/card/submit.js' 
 
 const interactions = [
    input_card,submit_card
  ] 
 
function attachEventListeners (interactions=[]) {
  interactions.forEach(interaction => {
    const element = document.getElementById(interaction.id);
    element.addEventListener(interaction.eventType, interaction.fn);
  })
}

onload = attachEventListeners(interactions)
