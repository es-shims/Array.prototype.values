# array.prototype.values <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES2015 spec-compliant `Array.prototype.values` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://www.ecma-international.org/ecma-262/6.0/).

Because `Array.prototype.values` depends on a receiver (the “this” value), the main export takes the array to operate on as the first argument.

## Example

```js
var values = require('array.prototype.values');
var assert = require('assert');
var iterate = require('iterate-iterator');

assert.deepStrictEqual(iterate(values([1, 2, 3])), [1, 2, 3]);
assert.deepStrictEqual(iterate(values([1, 0, 1])), [1, 0, 1]);
assert.deepStrictEqual(iterate(values([NaN])), [NaN]);
assert.deepStrictEqual(iterate(values([1,,3])), [1, undefined, 3]);
```

```js
var values = require('array.prototype.values');
var assert = require('assert');
/* when Array#values is not present */
delete Array.prototype.values;
var shimmedMap = values.shim();
assert.deepStrictEqual(shimmedMap, values.getPolyfill());
assert.deepStrictEqual(iterate([1, 2, 3].values()), [1, 2, 3]);
assert.deepStrictEqual(iterate([1, 0, 1].values()), [1, 0, 1]);
assert.deepStrictEqual(iterate([NaN].values()), [NaN]);
assert.deepStrictEqual(iterate([1,,3].values()), [1, undefined, 3]);
```

```js
var values = require('array.prototype.values');
var assert = require('assert');
/* when Array#values is present */
var shimmedMap = values.shim();
assert.equal(shimmedMap, Array.prototype.values);
assert.deepStrictEqual(iterate([1, 2, 3].values()), [1, 2, 3]);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array.prototype.values
[npm-version-svg]: http://versionbadg.es/es-shims/Array.prototype.values.svg
[travis-svg]: https://travis-ci.org/es-shims/Array.prototype.values.svg
[travis-url]: https://travis-ci.org/es-shims/Array.prototype.values
[deps-svg]: https://david-dm.org/es-shims/Array.prototype.values.svg
[deps-url]: https://david-dm.org/es-shims/Array.prototype.values
[dev-deps-svg]: https://david-dm.org/es-shims/Array.prototype.values/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Array.prototype.values#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array.prototype.values.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/array.prototype.values.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/array.prototype.values.svg
[downloads-url]: https://npm-stat.com/charts.html?package=array.prototype.values
