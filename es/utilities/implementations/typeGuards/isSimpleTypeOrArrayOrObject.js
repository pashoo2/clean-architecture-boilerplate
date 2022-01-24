"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSimpleArray = exports.isSimpleObject = exports.isObjectWithoutConstructor = exports.isSimpleTypeOrArrayOrObject = void 0;
const isSimpleType_1 = require("./isSimpleType");
function isSimpleTypeOrArrayOrObject(item) {
    return (0, isSimpleType_1.isSimpleType)(item) || isSimpleObject(item) || isSimpleArray(item);
}
exports.isSimpleTypeOrArrayOrObject = isSimpleTypeOrArrayOrObject;
function isObjectWithoutConstructor(o) {
    return Boolean(o && typeof o === 'object' && o.constructor === Object);
}
exports.isObjectWithoutConstructor = isObjectWithoutConstructor;
function isSimpleObject(o) {
    return (isObjectWithoutConstructor(o) &&
        // TODO - it fails on cycling references
        Object.getOwnPropertyNames(o).every(key => {
            return isSimpleTypeOrArrayOrObject(o[key]);
        }));
}
exports.isSimpleObject = isSimpleObject;
function isSimpleArray(arr) {
    return Array.isArray(arr) && arr.every(isSimpleTypeOrArrayOrObject);
}
exports.isSimpleArray = isSimpleArray;
//# sourceMappingURL=isSimpleTypeOrArrayOrObject.js.map