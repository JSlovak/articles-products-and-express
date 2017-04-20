/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

// Middleware
router.use((req, res, next) => {
  console.log(req);

  next();
});

// '/products' Route
router.route('/')
  .get(function(req, res) {
    //Responds with HTML generated from your template which displays all Products added thus far.
    //file name: index.hbs
    res.send("Successfully hit the end of GET /products route!");
  })
  .post(function(req, res) {
    // creates a new product
    // The incoming request will look like this: { name: String, price: String, inventory: String }
    // from this request you will save your data as { id: Number, name: String, price: Number, inventory: Number }
    // id is a unique identifier for this item. You will generate this on the server side and it will be used to access specific products with it
    // successful then redirect the user back to the /products route.
    //not successful then send the user back to the new article route, /products/new and some way to communicate the error back to the user via templating.

    res.send("Successfully hit the end of POST /products route!");
  });

// '/products/:id' Route
router.route('/:id')
  .get(function(req, res) {
    //responds with HTML generated from your template which displays the Products information for the product with the corresponding id.
    // file.name: index.hbs
    res.send("Successfully hit the end of GET /products/:id route!");
  })
  .put(function(req, res) {
    //edits a product. Finds a product in a collection with the same id value and updates the information.
    //The incoming request will look like this: { id: Number, ... }
//... represents a field to be edited for example: if the server was sent { id: 12, name: "Water Bed" } the server will find the product with an id of 12 and change the name property to be "Water Bed".
//If successful,redirect to /products/:id route, where :id is the product that was just edited
//If not successful, then send the user back to the new article route, /products/:id/edit
    //communicate the error back to the user via templating.

    res.send("Successfully hit the end of POST /products/:id route!");
  })
  .delete(function(req, res) {
    //removes a product by it's id.
    // If successful:redirect back to the /products page
      //communicates 'successful'.
    // If not successful: then send the new article route, /products/:id, where :id is the product that was just edited
      // Message that this action was unsucessful.

    res.send("Successfully hit the end of DELETE /products/:id route!");
  });

// '/products/:id/edit' Route
router.route('/:id/edit')
 .get(function(req, res) {
   //Responds with HTML generated from your templates
   //The HTML should contain a form (with values already pre-filled?) so that a user can update the information for a product. This form points to your server's route for editing a product.
   //file name: edit.hbs
   res.send("Successfully hit the end of GET /products/:id/edit route!");
 });

// '/products/new' Route
router.route('/new')
  .get(function(req, res) {
    //Responds with HTML generated from your templates
    //Contains an empty form which a user will be able to create a new product. This form points to your server's route for creating a new product.
    //file name: new.hbs
    res.send("Successfully hit the end of GET /products/new route!");
  });



module.exports = router;