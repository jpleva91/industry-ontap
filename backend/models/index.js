const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/industry_on_tap");

module.exports.Tap = require('./tap.js');
