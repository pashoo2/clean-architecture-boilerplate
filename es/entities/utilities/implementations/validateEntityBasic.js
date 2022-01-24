"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEntityBasic = exports.validateEntityObject = exports.validateEntityType = void 0;
const typeGuards_1 = require("../../../entities/utilities/implementations/typeGuards");
const implementations_1 = require("../../../valueObjects/utilities/implementations");
function validateEntityType(entityType) {
    if (!(0, typeGuards_1.isEntityMainType)(entityType)) {
        throw new Error('The entity type is not valid');
    }
}
exports.validateEntityType = validateEntityType;
function validateEntityObject(entity) {
    if (!entity) {
        throw new Error('An entity should not be an empty value');
    }
    if (typeof entity !== 'object') {
        throw new Error('An entity must be a value of an object type');
    }
}
exports.validateEntityObject = validateEntityObject;
function validateEntityBasic(entity) {
    validateEntityObject(entity);
    validateEntityType(entity.type);
    (0, implementations_1.validateEntityIdentity)(entity.id);
}
exports.validateEntityBasic = validateEntityBasic;
//# sourceMappingURL=validateEntityBasic.js.map