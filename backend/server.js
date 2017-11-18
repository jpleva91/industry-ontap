const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./config/routes');

app.use(bodyParser.urlencoded({extended: true}));

// Connect to the DB
mongoose.Promise = global.Promise;
mongoose.connect(	process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  'mongodb://localhost/industry_on_tap');

//Only needed if not on Heroku/prod
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", 'true');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});



// Serve up front end
app.use(express.static(__dirname + '/dist'));


// Use routes
app.use(routes);

// Start server
let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});