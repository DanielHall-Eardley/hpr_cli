const { server } = require('../files/server.js');
const { basePage } = require('../files/basePage.js');
const { templateEngine } = require('../constants.js');
const { entryScript } = require('../files/entryScript');
<<<<<<< HEAD
const { catchAsyncError } = require('../files/utils/catchAsyncError');
const { createHTMLComponent } = require('../files/utils/createHTMLComponent');
=======
const { defaultLayout } = require('../files/defaultLayout');
const { pageRoutes } = require('../files/pageRoutes');
const { pageController } = require('../files/pageController');
const { globalCSS } = require('../files/globalCSS');
const { catchAsyncError } = require('../files/catchAsyncError');
>>>>>>> 01afba86294cdfd4b0c0b703da8396a283800bd5

exports.dirStructure = [
  {
    name: 'layouts',
    files: [
      {
        name: `default.${templateEngine}`,
        data: defaultLayout()
      }
    ]
  },
  {
    name: 'pages',
    folders: [
      {
        name: 'home',
        files: [
          { 
            data: basePage(),
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
    name: 'utils',
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
    folders: [
      'models',
      {
        name: 'routes',
        files: [
          {
            name: 'page.js',
            data: pageRoutes
          }
        ]
      },
      {
        name: 'controllers',
        files: [
          {
            name: 'pageController',
            data: pageController
          }
        ]
      }
    ]
  },
  {
    name: 'global',
    files: [
      {
        name: 'global.css',
        data: globalCSS
      }
    ]
  },
  '.gitignore'
];