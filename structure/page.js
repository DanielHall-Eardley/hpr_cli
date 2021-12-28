const { basePage } = require('../files/basePage.js')
const { entryScript } = require('../files/entryScript.js')
const { templateEngine } = require('../constants.js');

exports.page = function (pageName) {
  return [
    {
      name: pageName,
      files: [
        {
          name: `${pageName}.${templateEngine}`,
          data: basePage(pageName)
        },
        {
          name: `${pageName}.js`,
          data: entryScript
        },
        `${pageName}.css`
      ],
      folders: ['components']
    }
  ]
};