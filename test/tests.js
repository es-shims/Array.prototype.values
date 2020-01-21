'use strict';

var iterate = require('iterate-iterator');

var canDistinguishSparseFromUndefined = 0 in [undefined]; // IE 6 - 8 have a bug where this returns false.

module.exports = function (values, t) {
	t.deepEqual(iterate(values([])), [], 'empty array yields nothing');
	t.deepEqual(iterate(values([1, 2])), [1, 2], 'array yields values');
	if (canDistinguishSparseFromUndefined) {
		// eslint-disable-next-line no-sparse-arrays
		t.deepEqual(iterate(values([1, , 3])), [1, undefined, 3], 'sparse array yields dense values');
	}
};
