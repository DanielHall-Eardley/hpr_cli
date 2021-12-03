const { v4: uuid } = require('uuid');

exports.setId = function (htmlElement) {
  let elementId = htmlElement.getAttribute('id');
  if (!elementId) {
    htmlElement.setAttribute('id', uuid());
  }

  return htmlElement;
};