const { server } = require('../files/server.js');
const { basePage } = require('../files/basePage.js');
const { templateEngine } = require('../constants.js');
const { entryScript } = require('../files/entryScript');

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
  'util',
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