const express = require('express');
const path = require('path');
const router = express.Router();

// Export the router
module.exports = router;

// Set up a basic home route
router.get('/', function(req, res) {
  // Get the URL path
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  // res.send('It\'s running!');
  // res.send(`<p>Node.js version: ${process.version}</p>
  //           <p>Path: ${fullUrl}</p>
  //           <p>Date and Time: ${new Date()}</p>
  //           <p>User: </p>`);
  res.sendFile(path.join(__dirname, '../index.html'));
});
