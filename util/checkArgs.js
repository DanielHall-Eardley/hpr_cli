const { throwError } = require('./error');

/* Check for the presence of commandline argument */
exports.checkArgs = function (args) {
  if (args?.length < 2) throwError('Specify name');
  return true;
}