"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSimpleType = exports.isString = exports.isAnyNumber = void 0;
function isAnyNumber(v) {
    return typeof v === 'number' || v instanceof Number;
}
exports.isAnyNumber = isAnyNumber;
function isString(v) {
    return typeof v === 'string' || v instanceof String;
}
exports.isString = isString;
function isSimpleType(v) {
    if (v === null ||
        v === undefined ||
        typeof v === 'boolean' ||
        isString(v) ||
        (isAnyNumber(v) && Number.isFinite(v.valueOf()))) {
        return true;
    }
    return false;
}
exports.isSimpleType = isSimpleType;
//# sourceMappingURL=isSimpleType.js.map