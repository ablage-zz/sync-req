var syncReq = require('..');

var expect = require('chai').expect;

describe('Sync-Req', function () {

	it('should GET Yahoo', function () {
		var response = syncReq('GET', 'http://www.yahoo.com');

		expect(response).to.have.keys('body', 'headers', 'statusCode');
		expect(response.statusCode).to.be.equal(200);
	});

	it('should POST Yahoo', function () {
		var response = syncReq('POST', 'http://www.yahoo.com', { body: "One\r\nwith newline" });

		expect(response).to.have.keys('body', 'headers', 'statusCode');
		expect(response.statusCode).to.be.equal(200);
	});
});
