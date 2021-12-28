exports.server = `
const express = require('express');
const app = express()
const path = require('path')
const { create } from 'express-handlebars';

const ssrRoutes = require('./ssrRoutes/ssrRoutes.js');
const hbs = create({ /* config */ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './pages');

const buildFilePath = path.join(__dirname, 'build');
app.use(express.static(buildFilePath);
app.use(sssRoutes);

app.listen(3000);
`