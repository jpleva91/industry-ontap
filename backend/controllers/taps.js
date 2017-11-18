let db = require('../models');



// Get all Taps
index = (req, res) => {
	db.Tap.find((err, taps) => {
		if (err) {return console.log('index error: ' + err); }
		res.json(books);
	});
};

addBeer = (req, res) => {
	// create the new beer based on the form request
	let newBeer = req.body.beer;
	let tapName = req.nody.tapName;
	// Add beer to tap
	db.Tap.findOne({'name' : tapName}, (err, data) => {
		let beers = data.beers;
		beers.push(newBeer);
		data.save();
		console.log(data);
	});
};