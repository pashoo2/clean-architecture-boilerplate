"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAggregateMainType = void 0;
const aggregateType_1 = require("../../../aggregates/constants/aggregateType");
const implementations_1 = require("../../../entities/utilities/implementations");
function isAggregateMainType(typeValue) {
    return ((0, implementations_1.isEntityTypeStringContainsCorrectCharacters)(typeValue) &&
        typeValue.trimStart().startsWith(aggregateType_1.AGGREGATE_TYPE_PREFIX));
}
exports.isAggregateMainType = isAggregateMainType;
//# sourceMappingURL=typeGuards.js.map