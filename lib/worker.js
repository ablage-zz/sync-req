var Promise = require('promise');
var thenRequest = require('then-request');
var JSONB = require('json-buffer');

module.exports = function (method, url, options) {

	return thenRequest(method, url, options).then(function (response) {

		return JSONB.stringify({ error: null, response: response });

	}, function (err) {
		return JSONB.stringify({ error: true, response: err.message });

	});
};
