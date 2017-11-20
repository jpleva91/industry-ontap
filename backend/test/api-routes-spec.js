const request = require('request');
const expect = require('chai').expect;

describe('Tap API', () => {

	// Index Route //
	describe('index route', () => {
		let response;
		let responseBody;
		before((done) => {
			request.get('http://localhost:3000/taps', (err, res, body) => {
				if (err) console.log(err);
				response = res;
				responseBody = JSON.parse(body);
				done();
			});
		});
		it('should have a status code of 200', () => {
			expect(response.statusCode).to.equal(200);
		});
		it('should return an object', () => {
			expect(response).to.be.an('object');
		});
		it('should have an array of taps in the body', () => {
			expect(responseBody).to.be.an('array');
		});
		it('should return multiple taps', () => {
			expect(responseBody.length).to.be.above(1);
		});
	});

	//

});