/*jshint esversion: 6 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products.js');
const articlesRoutes = require('./routes/articles.js');
const handlebars = require('express-handlebars');


const app = express();


// Rendering HANDLEBAR engine
const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'main'
});

// takes in a name and rendering engine
app.engine('hbs', hbs.engine);
// tells the server to 'view' the engine 'hbs'
app.set('views', './views');
app.set('view engine', 'hbs');


// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  console.log(req);
  //Analytics Tracker
    // log to a file all uri that are requested.
      // ea. request on it's own line
      // format: [method] [uri] [timestamp]
  // file location: all logs should go into a directory called logs and end with the .log extension
  // file name: the logs should be separated per day,
      //create file name which displays date. e.g. 2016.01-17.13-45-06.log
  next();
});

// Attach 'products' router to express
app.use('/products', productsRoutes);

// Attach 'articles' router to express
app.use('/articles', articlesRoutes);

// Handles wild card pages with 404
app.get(`*`, (req,res)=>{
  res.send('404');
});

module.exports = app;