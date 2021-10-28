import server from '../files/server.js';
import home from '../files/home.ejs'

const dirStructure = [
  {
    name: 'pages',
    folders: [
      {
        name: 'home',
        files: [home, 'home.js', 'home.css'],
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
    files: [server],
    folders: ['routes', 'controllers']
  }
]