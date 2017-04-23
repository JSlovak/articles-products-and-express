/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

allProducts = [];
console.log(allProducts);

// HElPER FUNCTIONS / DB FUNCTIONS

function genID(){
  return Math.floor((Math.random() * 1000) + 1);
}

const postProduct = (req, res) => {
  newProduct = {
    // id is a unique identifier for this item.
    id: genID(),
    name: req.body.name,
    price: req.body.price,
    inventory: req.body.inventory
  };

  allProducts.push(newProduct);
  console.log(addProduct);

    // if (Products.addProduct(req.body)) {
    //   res.redirect('/products/index');
    // } else {
    //   res.redirect('/products/new');
    // }
};

const putProduct = (req, res) => {

};

const deleteProduct = (req, res)=> {

};

// MIDDLEWARE
router.use((req, res, next) => {
  console.log(req);
//Payload Validation

  next();
});

// ROUTES
// '/products' Route
router.route('/')
  .get(function(req, res) {
    res.render('products/index');
  })
  .post(function(req, res) {
    postProduct(req, res);
    res.render('products/index');
  });

  // '/products/:id' Route
  router.route('/:id')
    .get(function(req, res) {
    //responds with HTML generated from your template which displays the Products information for the product with the corresponding id.
    // file.name: index.hbs

    res.render('products/products/:id');
    res.send("Successfully hit the end of GET /products/:id route!");
  })
  .put(function(req, res) {
    console.log(req.body);
    console.log(res.body);
    //edits a product. Finds a product in a collection with the same id value and updates the information.
    //The incoming request will look like this: { id: Number, ... }
    //... represents a field to be edited for example: if the server was sent { id: 12, name: "Water Bed" } the server will find the product with an id of 12 and change the name property to be "Water Bed".

    //If successful,redirect to /products/:id route, where :id is the product that was just edited
    res.render('products/products/:id');
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
    res.render('edit');
   //res.send("Successfully hit the end of GET /products/:id/edit route!");
 });

// '/products/new' Route
router.route('/new')
  .get(function(req, res) {
    //Responds with HTML generated from your templates
    //Contains an empty form which a user will be able to create a new product. This form points to your server's route for creating a new product.
    //file name: new.hbs
    res.render('new');
    //res.send("Successfully hit the end of GET /products/new route!");
  });

module.exports = router;

