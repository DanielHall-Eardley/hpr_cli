const { server } = require('../files/server.js');
const { homeEjs } = require('../files/home.js');

exports.dirStructure = [
  {
    name: 'pages',
    files: ['entry.js', 'entry.ejs', 'entry.css'],
    folders: [
      {
        name: 'home',
        files: [
          { 
            data: homeEjs,
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
  }
];