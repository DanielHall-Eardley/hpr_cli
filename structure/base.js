const { server } = require('../files/server.js');
const { basePage } = require('../files/basePage.js');
const { templateEngine } = require('../constants.js');
const { entryScript } = require('../files/entryScript');
const { defaultLayout } = require('../files/defaultLayout');
const { pageRoutes } = require('../files/pageRoutes');
const { pageController } = require('../files/pageController');
const { globalCSS } = require('../files/globalCSS');
const { catchAsyncError } = require('../files/catchAsyncError');

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
  }
];