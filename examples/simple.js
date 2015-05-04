var syncReq = require('..');
var thenRequest = require('then-request');

// Synchronous
var res = syncReq('GET', 'http://www.yahoo.com');
console.log(res);

// Asynchronous
thenRequest('GET', 'http://www.yahoo.com').then(function (response) {
	console.log(response);
}, function (err) {
	console.log(err.message);
});
