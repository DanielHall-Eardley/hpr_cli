exports.server = `
const express = require('express');
const app = express()
const path = require('path')
const { create } from 'express-handlebars';

const hbs = create({ /* config */ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './pages');

const buildFilePath = path.join(__dirname, 'build');
app.use(express.static(buildFilePath);

app.use((error, req, res, next) => {
  console.log(error);
})

app.listen(3000);
`