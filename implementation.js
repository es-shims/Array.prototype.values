'use strict';

var CreateArrayIterator = require('es-create-array-iterator');
var ToObject = require('es-abstract/2020/ToObject');

module.exports = function values() {
	var O = ToObject(this);
	return CreateArrayIterator(O, 'value');
};
