const mongoose = require('mongoose');
mongoose.connect(	process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  'mongodb://localhost/industry_on_tap');

module.exports.Tap = require('./tap.js');
