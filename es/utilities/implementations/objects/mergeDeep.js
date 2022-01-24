"use strict";
/**
 * https://github.com/voodoocreation/ts-deepmerge/blob/master/src/index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeDeep = void 0;
// istanbul ignore next
const isObject = (obj) => {
    if (typeof obj === 'object' && obj !== null) {
        if (typeof Object.getPrototypeOf === 'function') {
            const prototype = Object.getPrototypeOf(obj);
            return prototype === Object.prototype || prototype === null;
        }
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
    return false;
};
const mergeDeep = (...objects) => objects.reduce((result, current) => {
    Object.keys(current).forEach(key => {
        if (Array.isArray(result[key]) && Array.isArray(current[key])) {
            result[key] = Array.from(new Set(result[key].concat(current[key])));
        }
        else if (isObject(result[key]) && isObject(current[key])) {
            result[key] = (0, exports.mergeDeep)(result[key], current[key]);
        }
        else {
            result[key] = current[key];
        }
    });
    return result;
}, {});
exports.mergeDeep = mergeDeep;
//# sourceMappingURL=mergeDeep.js.map