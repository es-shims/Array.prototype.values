import callBind from 'es-abstract/helpers/callBind.js';
import RequireObjectCoercible from 'es-abstract/2019/RequireObjectCoercible.js';

import getPolyfill from 'array.prototype.values/polyfill';

const bound = callBind(getPolyfill());

export default function values(array) {
	RequireObjectCoercible(array);
	return bound(array);
};

export { default as getPolyfill } from 'array.prototype.values/polyfill';
export { default as implementation } from 'array.prototype.values/implementation';
export { default as shim } from 'array.prototype.values/shim';
