let db = require('./models');

let tap_list = [
	{
		name: 'Central',
		beers: ['Breck Vanilla Porter', 'Ska Modus Hoperandi', 'Dry Dock Apricot Blonde'],
		lastUpdated: Date.now()
	},
	{
		name: 'Upstairs',
		beers: ['New Holland Dragons Milk', 'Cerebral Dark Galaxy', 'Epic Tart and Juicy'],
		lastUpdated: Date.now()
	},
	{
		name: 'North',
		beers: ['DBC Pretzel Assassin', 'DBC Graham Cracker Porter', 'TRVE Cursed'],
		lastUpdated: Date.now()
	},
	{
		name: 'South',
		beers: ['Ska True Blonde', 'Oskar Blues Dales Pale Ale', 'Oskar Blues Old Chub'],
		lastUpdated: Date.now()
	}
];

db.Tap.remove({}, (err, taps) => {
	console.log('removed all taps');
	db.Tap.create(tap_list, (err, taps) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log('recreated taps');
		console.log('created', taps.length, 'taps');
	});
});