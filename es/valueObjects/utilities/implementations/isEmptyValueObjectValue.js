"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyMultipleValuesValueObjectValue = exports.isEmptyBaseValueObjectValue = void 0;
const typeGuards_1 = require("../../../utilities/implementations/typeGuards");
function isEmptyBaseValueObjectValue(valueObjectValue) {
    return (valueObjectValue === null ||
        valueObjectValue === undefined ||
        valueObjectValue === false ||
        ((0, typeGuards_1.isAnyNumber)(valueObjectValue) &&
            (valueObjectValue === 0 || Number.isNaN(valueObjectValue))) ||
        ((0, typeGuards_1.isString)(valueObjectValue) && valueObjectValue.trim() === ''));
}
exports.isEmptyBaseValueObjectValue = isEmptyBaseValueObjectValue;
function isEmptyMultipleValuesValueObjectValue(valueObjectValue) {
    if (!valueObjectValue) {
        return true;
    }
    return Object.keys(valueObjectValue).length === 0;
}
exports.isEmptyMultipleValuesValueObjectValue = isEmptyMultipleValuesValueObjectValue;
//# sourceMappingURL=isEmptyValueObjectValue.js.map