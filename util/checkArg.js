const { throwError } = require('./error');

/* Check for the presence of commandline argument */
exports.checkArg = function (arg) {
  if (!arg) throwError('Specify name');
  return true;
}