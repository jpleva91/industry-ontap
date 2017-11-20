const express = require('express');
const router = express.Router();

const tapsController = require('../controllers/taps.js');

router.route('/taps')
	.get(tapsController.index)
	.post(tapsController.addBeer);

module.exports = router;