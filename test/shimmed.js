'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');

var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();
var hasStrictMode = require('has-strict-mode')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Array.prototype.values.length, 0, 'Array#values has a length of 0');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Array.prototype.values.name, 'values', 'Array#values has name "values"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array.prototype, 'values'), 'Array#values is not enumerable');
		et.end();
	});

	t.test('bad array/this value', { skip: !hasStrictMode }, function (st) {
		st['throws'](function () { return Array.prototype.values.call(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Array.prototype.values.call(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(Array.prototype.values), t);

	t.end();
});
