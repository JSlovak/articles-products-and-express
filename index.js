/*jshint esversion: 6*/

const app = require('./server.js');
const port = 3000;

// Creates server
 app.listen(port, function () {

  console.log(`Server listening on ${port}`);
});