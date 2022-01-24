"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMultipleValuesValueObjectInsteadOfBase = exports.isMultipleValuesValueObject = exports.isBaseValueObject = exports.isValueObject = void 0;
const typeGuards_1 = require("../../../utilities/implementations/typeGuards");
function isValueObject(valueObject) {
    if (!valueObject) {
        return false;
    }
    if (typeof valueObject !== 'object') {
        return false;
    }
    if (!('value' in valueObject)) {
        return false;
    }
    if (typeof valueObject.serialize !== 'function' ||
        valueObject.serialize.length) {
        return false;
    }
    if (typeof valueObject.equalsTo !== 'function' ||
        valueObject.equalsTo.length !== 1) {
        return false;
    }
    return true;
}
exports.isValueObject = isValueObject;
function isBaseValueObject(valueObject) {
    if (!isValueObject(valueObject)) {
        return false;
    }
    if (!(0, typeGuards_1.isSimpleType)(valueObject.value)) {
        return false;
    }
    return true;
}
exports.isBaseValueObject = isBaseValueObject;
function isMultipleValuesValueObject(valueObject) {
    if (!isValueObject(valueObject)) {
        return false;
    }
    if ((0, typeGuards_1.isSimpleType)(valueObject.value)) {
        return false;
    }
    if (!valueObject.value) {
        return false;
    }
    if (typeof valueObject.value !== 'object') {
        return false;
    }
    return true;
}
exports.isMultipleValuesValueObject = isMultipleValuesValueObject;
function isMultipleValuesValueObjectInsteadOfBase(valueObject) {
    if (valueObject.value && typeof valueObject.value === 'object') {
        return true;
    }
    return false;
}
exports.isMultipleValuesValueObjectInsteadOfBase = isMultipleValuesValueObjectInsteadOfBase;
//# sourceMappingURL=typeGuards.js.map