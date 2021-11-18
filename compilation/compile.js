/* todo
create a list of entry points for each page to feed esbuild
  each page needs a css and js relative path to add to the entry point array done!

each page.ejs needs link and script tags specific to that page
  two links, one global and one bundled for the page
  one script tag of bundled js - done!!

each component ejs file needs to be parsed for dom interaction events
  each interaction element needs to have a unique id generated
    if data-id is not defined
  
    dom interaction events include:
    input (data being entered)
    submit (data being saved)
    update (dom being updated with data from the either of the previous interactions)
  
  create file for each interaction type
  
  for interactive elements three data- attributes:
    data-interaction=[interaction]
    data-event-type=[event]
    data-name
    id (never changes, consistent)

  if a dom element contains interactions elements:
    input interaction:
      create an [input | submit | update].js" file which creates a list of functions to be exported
        to a function that will attach all the event listeners to the 
        correct element on page load

      each fn to recieve the event object from listener
      if the interactions.js file exists it must be parsed to do the following:
      check for existing functions with unique id
        if id is found but name is different, update name,
        if id is not found, create fn
        if there is any left over fn that dont match id, remove them
      create array for event listener fn:
        {
          id: {
            name: [data.name]
            listener: [fn]
            eventType: [type]
          }
        }
    submit interaction:
      same as input except:
        event listener = 'submit'
    update interaction:
        same input except:
      create an update.js file which creates a list of functions to be exported
        to a function that will find the correct element and pass it to the update fn
      update file exported so that functions can be used in input or submit type
    
      css file will have same logic except:
      empty classes will be created
      component title will be prepended before classname - css module style
    
      compilation process:
        parse the component - done
        append the parsed data to a body tag - done
        find all the elements that contain data-inteaction
        read already existing interaction files
        for each element:
          if an id is not present on the element,
          create one and also create the object (as shown above)
          append the object to the new data to be written to the file

          if id does exist on element
          check with the parsed interaction file
          update the name, eventType and fn name based on the html
          the fn string will need to parsed to locate and update the name 
          without destroying the existing fn
          this will make the html the single source of truth
          add the object to the new Data object
          rewrite the interaction files


*/

const { getPages } = require('./getPages.js')
const es = require('esbuild');
const { config } = require('../buildConfig/config.js');
const { createEntryPoints } = require('../buildConfig/createEntryPoints.js');
const fs = require('fs');
const path = require('path')
const { getHtmlElements } = require('./getHtmlElements.js');
const { getInteractions } = require('./getInteractions.js');
const { createInteraction } = require('./createInteraction.js');
const { writeComponent } = require('../fileMod/writeComponent.js');

exports.compile = function (relativePath=__dirname) {
  const pages = getPages(relativePath);

  pages.forEach(page => {
    const componentPath = path.join(relativePath, 'pages', page, 'components');
    const components = fs.readdirSync(componentPath);

    components.forEach(compName => {
      const htmlFilePath = path.join(componentPath, compName, `${compName}.ejs`);
      const interactionPath = path.join(componentPath, compName);

      const htmlFile = fs.readFileSync(htmlFilePath, { encoding: 'utf8'});
      const html = getHtmlElements(htmlFile);
      const existingInteractions = getInteractions(interactionPath);
      const data = createInteraction(html, existingInteractions);
      console.log(data);
      writeComponent(data, htmlFilePath, interactionPath);
    })
  })
  
  // const entryPoints = createEntryPoints(pages);
  // // add entry points from pages array
  // const newConfig = config(entryPoints);
  // es.build(newConfig);
}