"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEntityIdentity = exports.validateEntityIdentityMultipleValue = exports.validateEntityIdentityBase = void 0;
const isEmptyValueObjectValue_1 = require("../../../valueObjects/utilities/implementations/isEmptyValueObjectValue");
const typeGuards_1 = require("../../../valueObjects/utilities/implementations/typeGuards");
function validateEntityIdentityBase(entityId) {
    if (!(0, typeGuards_1.isBaseValueObject)(entityId)) {
        throw new Error('Should be a valid simple value object');
    }
    if ((0, isEmptyValueObjectValue_1.isEmptyBaseValueObjectValue)(entityId.value)) {
        throw new Error('Identity value object should not have an empty value');
    }
}
exports.validateEntityIdentityBase = validateEntityIdentityBase;
function validateEntityIdentityMultipleValue(entityId) {
    if (!(0, typeGuards_1.isMultipleValuesValueObject)(entityId)) {
        throw new Error('Should be a valid multiple values value object');
    }
    if ((0, isEmptyValueObjectValue_1.isEmptyMultipleValuesValueObjectValue)(entityId.value)) {
        throw new Error('Identity value object should not have an empty value');
    }
}
exports.validateEntityIdentityMultipleValue = validateEntityIdentityMultipleValue;
function validateEntityIdentity(entityId) {
    if (!(0, typeGuards_1.isValueObject)(entityId)) {
        throw new Error('Entity should have a valid identity value object');
    }
    if ((0, typeGuards_1.isMultipleValuesValueObjectInsteadOfBase)(entityId)) {
        validateEntityIdentityMultipleValue(entityId);
    }
    else {
        validateEntityIdentityBase(entityId);
    }
}
exports.validateEntityIdentity = validateEntityIdentity;
//# sourceMappingURL=validate.js.map