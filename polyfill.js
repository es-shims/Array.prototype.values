'use strict';

var implementation = require('./implementation');

/* eslint global-require: 0 */
/*
 * the code is structured this way so that bundlers can
 * alias out `has-symbols` to `() => true` or `() => false` if your target
 * environments' Symbol capabilities are known, and then use
 * dead code elimination on the rest of this module.
 */

module.exports = function getPolyfill() {
	if (require('has-symbols')() || require('has-symbols/shams')()) {
		var method = Array.prototype.values;
		// Chrome 39-65 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
		if (!Array.prototype.values && Array.prototype[Symbol.iterator]) {
			method = Array.prototype[Symbol.iterator];
		}

		// Chrome 39-45, node 1-4 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name
		if (method && method.name !== 'values') {
			var callBind = require('call-bind');
			var $original = callBind(method);
			return function values() {
				return $original(this); // eslint-disable-line no-invalid-this
			};
		}
		return method || implementation;
	}

	return implementation;
};
