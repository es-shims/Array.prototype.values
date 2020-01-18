'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayValues() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ values: polyfill },
		{ values: function () { return Array.prototype.values !== polyfill; } }
	);
	return polyfill;
};
