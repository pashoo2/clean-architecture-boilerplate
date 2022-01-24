"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntityTypeByString = void 0;
const entityType_1 = require("../../../entities/constants/entityType");
const typeGuards_1 = require("../../../entities/utilities/implementations/typeGuards");
function getEntityTypeByString(stringValue) {
    const stringTrimmed = stringValue.trim();
    if (!(0, typeGuards_1.isEntityTypeStringContainsCorrectCharacters)(stringTrimmed)) {
        throw new Error('The string passed contains non valid characters');
    }
    return `${entityType_1.ENTITY_TYPE_PREFIX}__${stringTrimmed}`;
}
exports.getEntityTypeByString = getEntityTypeByString;
//# sourceMappingURL=getEntityTypeByString.js.map