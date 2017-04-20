/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

// Middleware
router.use((req, res, next) => {
  console.log(req);

  next();
});

// '/articles' Route
router.route('/')
  .get(function(req, res) {
    res.send("Successfully hit the GET end of /articles route!");
  })
  .post(function(req, res) {
    res.send("Successfully hit the POST end of /articles route!");
  });

// '/articles/:titles' Route
router.route('/:title')
  .get(function(req, res) {
    res.send("Successfully hit the end of GET /articles/:titleroute!");
  })
  .put(function(req, res) {
    res.send("Successfully hit the end of POST /articles/:title route!");
  })
  .delete(function(req, res) {
    res.send("Successfully hit the end of DELETE /articles/:title route!");
  });

// '/articles/:title/edit' Route
router.route('/:title/edit')
  .get(function(req, res) {
    res.send("Successfully hit the end of GET /articles/:title/edit route!");
  });

// '/articles/new Route
router.route('/new')
  .get(function(req, res) {
    res.send("Successfully hit the end of GET /articles/new route!");
  });


module.exports = router;
