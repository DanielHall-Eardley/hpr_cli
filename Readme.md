# Hybrid page render framework

## cli commands
create the file struture "hpr-create"

create the distribution build "hpr-compile"

create a new page folder "hpr-create-page [pagename]"

create a new component folder "hpr-create-component [pagename] [componentname]"

## Add a event listener to a html element

data-interaction = [submit] || [input]

data-event-type = event to listen for, 'click, 'oninput'

data-name = function name

## Class name

By default a css module-like classname is generated [componentname]_[classname]_[uuid]

Append _[noScoped] to leave the className unchanged
