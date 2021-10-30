exports.getName = function (element) {
  if (typeof element === 'string') {
    return element;
  }

  return element.name;
}