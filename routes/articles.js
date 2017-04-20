/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

// MIDDLEWARE
router.use((req, res, next) => {
  console.log(req);
  // Scope: Incoming requests to any /articles route.
  // must have the header version: 1.0
  // if not respond back with { "error": "bad headers" }

  next();
});

router.use((req, res, next) => {
  console.log(req);
//Payload Validation

  next();
});


// ROUTES
// '/articles' Route
router.route('/')
  .get(function(req, res) {
    // responds with HTML generated from your template which displays all Articles added thus far.
    // file name: index.hbs
    res.send("Successfully hit the GET end of /articles route!");
  })
  .post(function(req, res) {
    // creates a new article
    // incoming request will look like this: { title: String, body: String, author: String }
    // urlTitle is similar to the title that was passed in but instead is a URL Encoded version. Javascript has a native way to url-encode strings. example: If given a title of "The Best Magpie Developer of 2016", it's url-encoded equivilent is "The%20Best%20Magpie%20Developer%20of%202016".
    // If successful then redirect the user back to the /articles route.
    // If not successful then send the user back to the new article route, /articles/new and some way to communicate the error back to the user via templating.
    res.send("Successfully hit the POST end of /articles route!");
  });

// '/articles/new' Route
router.route('/new')
  .get(function(req, res) {
    // responds with HTML generated from your templates.
    // The HTML should contain an empty form which a user will be able to create a new article. This form points to your server's route for creating a new article.
    // file name: new.hbs
    res.send("Successfully hit the end of GET /articles/new route!");
  });

// '/articles/:titles' Route
router.route('/:title')
  .get(function(req, res) {
  // GET responds with HTML generated from your template which displays the Article information for the article with the corresponding title.
  // file name: article.hbs
  res.send("Successfully hit the end of GET /articles/:titleroute!");
  })
  .put(function(req, res) {
    // edits a product. Finds an article in a collection with the same title value and updates the information.
    // The incoming request will look like this: { title: String, ... }
    // ... represents a field to be edited for example: if the server was sent { title: "The Best Magpie Developer of 2016" } the server will find an article with a title property to be "The Best Magpie Developer of 2016".
    // If successful then redirect the user back to the /articles/:title route, where :title is the article that was just edited, so that they can see the updated resource.
    // If not successful then send the user back to the new article route, /article/:title/edit and some way to communicate the error back to the user via templating.
    res.send("Successfully hit the end of PUT /articles/:title route!");
  })
  .delete(function(req, res) {
    // removes a article by it's title.
    // If successful then redirect the user back to the /articles page and some way to communicate to the user that this action was successful.
    // If not successful then send the user back to the new article route, /article/:id, where :id is the product that was just edited and a message that this action was unsucessful.
    res.send("Successfully hit the end of DELETE /articles/:title route!");
  });

// '/articles/:title/edit' Route
router.route('/:title/edit')
  .get(function(req, res) {
    // responds with HTML generated from your templates.
    // The HTML should contain a form (with values already pre-filled?) so that a user can update the information for an article. This form points to your server's route for editing an article.
    // file name: edit.hbs
    res.send("Successfully hit the end of GET /articles/:title/edit route!");
  });

module.exports = router;
