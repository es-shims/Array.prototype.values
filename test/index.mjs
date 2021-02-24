import values from 'array.prototype.values';
import * as valuesModule from 'array.prototype.values';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	t.test('bad array/this value', (st) => {
		st.throws(() => values(undefined), TypeError, 'undefined is not an object');
		st.throws(() => values(null), TypeError, 'null is not an object');
		st.end();
	});

	runTests(values, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(valuesModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = valuesModule;
	t.equal(await import('array.prototype.values/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('array.prototype.values/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('array.prototype.values/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
