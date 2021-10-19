// this app is responsible for adding middlewares to the router
const express = require('express');
const app = express();

//import routes
const teamRoutes = require('./routes/teams.route');
const tournamentRoutes = require('./routes/tournament.route');

// middlwares
// this middlware enables the express router to handle post requests with a json body
app.use(express.json());

// specifing we want all request to / handled with the teamRoutes file, same for tournament
app.use('/', teamRoutes);
app.use('/', tournamentRoutes);


// routes
app.get('/', (req, res) => {
  res.send('<h1> Welcome to the Football Game Service api | Written by Ortal</h1>');
  
});

module.exports = app;