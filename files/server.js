exports.server = `
const app = require('express');
const server = app.express()
const path = require('path')

const ssrRoutes = require('./ssrRoutes/ssrRoutes.js');
const buildFilePath = path.join(__dirname, 'dist');
app.use(express.static(buildFilePath);

app.use(sssRoutes);
`