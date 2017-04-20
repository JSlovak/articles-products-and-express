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
  .post(function(req, res) {
    res.send("Successfully hit the end of /articles route!");
  });

// '/products/:id' Route
router.route('/:title')
  .post(function(req, res) {
    res.send("Successfully hit the end of POST /products/:id route!");
  })
  .delete(function(req, res) {
    res.send("Successfully hit the end of DELETE /products/:id route!");
  });

module.exports = router;
