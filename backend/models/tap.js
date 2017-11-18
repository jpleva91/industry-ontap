const mongoose = require('mongoose');


let Tap = mongoose.Schema({
	name: String,
	beers: [String],
	lastUpdated: Date
});

module.exports = mongoose.model('Tap', Tap);