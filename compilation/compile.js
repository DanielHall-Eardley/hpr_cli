/* todo
create a list of entry points for each page to feed esbuild
  each page needs a css and js relative path to add to the entry point array

each page.ejs needs link and script tags specific to that page
  two links, one global and one bundled for the page
  one script tag of bundled js

each component ejs file needs to be parsed for dom interaction events
  each interaction element needs to have a unique id generated
    if data-id is not defined
  dom interaction events include:
    input (data being entered)
    submit (data being saved)
    update (dom being updated with data from the either of the previous interactions)
  for interactive elements three data- attributes:
    data-interaction (with modifier for type)
    data-name
    data-id (never changes, consistent)
  if a dom element contains interactions elements:
    input interaction:
      create an 'interactions.js" file which creates a list of functions to be exported
        to a function that will attach all the event listeners to the 
        correct element on page load
      each fn to have name structure _[data-name]_[uniqueId]
      each fn to recieve the event object from listener
      if the interactions.js file exists it must be parsed to do the following:
      check for existing functions with unique id
        if id is found but name is different, update name,
        if id is not found, create fn
        if there is any left over fn that dont match id, remove them
      create array for event listener fn:
        [
          {
            id: [data-id],
            listener: [fn]
          }
        ]
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
 
*/

const { getPages } = require('./getPages.js');

exports.compile = function (relativePath=__dirname) {
  const pages = getPages(relativePath);
  console.log(pages);
}