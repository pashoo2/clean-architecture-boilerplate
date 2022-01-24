"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareValuesFunctionFabric = exports.compareValuesByStrategy = void 0;
const typeGuards_1 = require("../../../utilities/implementations/typeGuards");
const isSimpleType_1 = require("../typeGuards/isSimpleType");
function compareValuesByStrategy(firstValue, secondValue, comparisonStrategy) {
    if (arguments.length < 3) {
        throw new Error('3 arguments are required by the "compareValuesByStrategy"');
    }
    if (firstValue === secondValue) {
        return true;
    }
    // Simple value types
    if ((0, isSimpleType_1.isSimpleType)(firstValue)) {
        if ((0, isSimpleType_1.isSimpleType)(secondValue)) {
            return comparisonStrategy.compareSimpleType(firstValue, secondValue);
        }
    }
    // Dates
    if (firstValue instanceof Date) {
        if (secondValue instanceof Date) {
            return comparisonStrategy.compareDates(firstValue, secondValue);
        }
    }
    // Objects
    if ((0, typeGuards_1.isObjectWithoutConstructor)(firstValue)) {
        if ((0, typeGuards_1.isObjectWithoutConstructor)(secondValue)) {
            // Nested objects
            return comparisonStrategy.compareObjects(firstValue, secondValue, comparisonStrategy);
        }
    }
    // Arrays
    if (Array.isArray(firstValue)) {
        if (Array.isArray(secondValue)) {
            // Nested arrays
            return comparisonStrategy.compareArrays(firstValue, secondValue, comparisonStrategy);
        }
    }
    // Any other values
    return comparisonStrategy.compareOther(firstValue, secondValue, comparisonStrategy);
}
exports.compareValuesByStrategy = compareValuesByStrategy;
function compareValuesFunctionFabric(comparisonStrategy) {
    return (firstValue, secondValue) => compareValuesByStrategy(firstValue, secondValue, comparisonStrategy);
}
exports.compareValuesFunctionFabric = compareValuesFunctionFabric;
//# sourceMappingURL=compareByStrategy.js.map