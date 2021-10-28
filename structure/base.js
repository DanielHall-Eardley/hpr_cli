const dirStructure = [
  {
    name: 'pages',
    folders: [
      {
        name: 'home',
        files: ['home.ejs', 'home.js', 'home.css'],
        folders: ['components']
      }
    ]
  },
  'build',
  {
    name: 'ssrRoutes',
    files: ['routes.js']
  },
  'routes',
  'controllers',
  'util'
]