let db = require('../models');



// Get all Taps
index = (req, res) => {
	db.Tap.find((err, taps) => {
		if (err) {return console.log('index error: ' + err); }
		res.json(books);
	});
};

addBeer = (req, res) => {
	let newBeer = req.qeury;
};