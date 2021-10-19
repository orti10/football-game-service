// this is the starting file of the program, and starts the server
const express = require('express');
const app = require('./app');

// if process.enc.PORT in the .env file is defined, use that.
// if not, use default value 3000
const PORT = process.env.PORT || 3000;

// start server, and output message to console
  app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT+'...');
});