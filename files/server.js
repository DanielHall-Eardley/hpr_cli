exports.server = `

const express = require('express');
const app = express()
const path = require('path')
const { create } = require('express-handlebars');

const pageRoutes = require('./routes/page');

const hbs = create({ 
  partialsDir: [
    '../pages/home/components/header'
  ],
  layoutsDir: '../layouts'
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', '../pages');
app.use(pageRoutes);

const buildFilePath = path.join(__dirname, 'build');
app.use(express.static(buildFilePath));

app.use((error, req, res, next) => {
  console.log(error);
})

const PORT = process.env.PORT ?? 3000;

app.listen(PORT);
`