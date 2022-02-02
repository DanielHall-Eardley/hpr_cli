const { server } = require('../files/server.js');
const { basePage } = require('../files/basePage.js');
const { templateEngine } = require('../constants.js');
const { entryScript } = require('../files/entryScript');
const { catchAsyncError } = require('../files/utils/catchAsyncError');
const { createHTMLComponent } = require('../files/utils/createHTMLComponent');

exports.dirStructure = [
  {
    name: 'pages',
    folders: [
      {
        name: 'home',
        files: [
          { 
            data: basePage('home'),
            name: `home.${templateEngine}` 
          }, 
          {
            name: 'home.js',
            data: entryScript
          },
          'home.css'
        ],
        folders: ['components']
      }
    ]
  },
  'build',
  {
    name: 'util',
    files: [
      {
        name: 'catchAsyncError',
        data: catchAsyncError
      },
      {
        name: 'createHTMLComponent',
        data: createHTMLComponent
      }
    ]
  },
  {
    name: 'api',
    files: [
      {
        data: server,
        name: 'server.js'
      }
    ],
    folders: ['routes', 'controllers']
  },
  {
    name: 'global',
    files: ['global.css']
  }
];