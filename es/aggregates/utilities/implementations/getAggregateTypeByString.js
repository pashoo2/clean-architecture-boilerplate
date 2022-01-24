"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAggregateTypeByString = void 0;
const aggregateType_1 = require("../../../aggregates/constants/aggregateType");
const typeGuards_1 = require("../../../entities/utilities/implementations/typeGuards");
function getAggregateTypeByString(stringValue) {
    const stringTrimmed = stringValue.trim();
    if (!(0, typeGuards_1.isEntityTypeStringContainsCorrectCharacters)(stringTrimmed)) {
        throw new Error('The string passed contains non valid characters');
    }
    return `${aggregateType_1.AGGREGATE_TYPE_PREFIX}__${stringTrimmed}`;
}
exports.getAggregateTypeByString = getAggregateTypeByString;
//# sourceMappingURL=getAggregateTypeByString.js.map