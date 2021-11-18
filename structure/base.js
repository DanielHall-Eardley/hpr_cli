const { server } = require('../files/server.js');
const { basePage } = require('../files/basePage.js');

exports.dirStructure = [
  {
    name: 'pages',
    folders: [
      {
        name: 'home',
        files: [
          { 
            data: basePage('home'),
            name: 'home.ejs' 
          }, 
          'home.js', 
          'home.css'
        ],
        folders: ['components']
      }
    ]
  },
  'build',
  {
    name: 'ssrRoutes',
    files: ['routes.js']
  },
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