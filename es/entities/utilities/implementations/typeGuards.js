"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEntityMainType = exports.isEntityTypeStringContainsCorrectCharacters = void 0;
const entityType_1 = require("../../../entities/constants/entityType");
const typeGuards_1 = require("../../../utilities/implementations/typeGuards");
function isEntityTypeStringContainsCorrectCharacters(entityTypeString) {
    return ((0, typeGuards_1.isString)(entityTypeString) &&
        Boolean(entityTypeString) &&
        entityType_1.ENTITY_TYPE_VALIDATION_REGEXP.test(`${entityTypeString}`));
}
exports.isEntityTypeStringContainsCorrectCharacters = isEntityTypeStringContainsCorrectCharacters;
function isEntityMainType(typeValue) {
    return (isEntityTypeStringContainsCorrectCharacters(typeValue) &&
        typeValue.trim().length > entityType_1.ENTITY_TYPE_PREFIX.trim().length &&
        typeValue.startsWith(entityType_1.ENTITY_TYPE_PREFIX));
}
exports.isEntityMainType = isEntityMainType;
//# sourceMappingURL=typeGuards.js.map