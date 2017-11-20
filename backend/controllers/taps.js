let db = require('../models');

// Get all Taps
index = (req, res) => {
	db.Tap.find((err, taps) => {
		if (err) {return console.log('index error: ' + err); }
		res.json(taps);
	});
};

// Find a tap and push the new beer to the array
addBeer = (req, res) => {
	// create the new beer based on the form request
	let newBeer = req.body.beer;
	let tapName = req.body.tapName;
	// Add beer to tap
	db.Tap.findOne({'name' : tapName}, (err, data) => {
		let beers = data.beers;
		beers.push(newBeer);
		data.save();
		console.log(data);
		res.json(data);
	});
};

module.exports = {
	index: index,
	addBeer: addBeer
};