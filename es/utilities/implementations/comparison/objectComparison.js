"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareObjectsDeepByStrategy = exports.compareObjectsShallowByStrategy = exports.compareObjectsDeepWithCompareValuesFunction = void 0;
const simpleTypeValuesComparison_1 = require("../../../utilities/implementations/comparison/simpleTypeValuesComparison");
const compareByStrategy_1 = require("./compareByStrategy");
function compareObjectsDeepWithCompareValuesFunction(objectFirst, objectSecond, compareValues) {
    if (objectFirst === objectSecond) {
        return true;
    }
    const objectFirstKeys = Object.keys(objectFirst);
    if (objectFirstKeys.length !== Object.keys(objectSecond).length) {
        return false;
    }
    // TODO - for an object with cycle references it will throw
    return objectFirstKeys.every(key => {
        const objectFirstValueForKey = objectFirst[key];
        const objectSecondValueForKey = objectSecond[key];
        if (objectFirstValueForKey === objectSecondValueForKey) {
            return true;
        }
        return compareValues(objectFirstValueForKey, objectSecondValueForKey);
    });
}
exports.compareObjectsDeepWithCompareValuesFunction = compareObjectsDeepWithCompareValuesFunction;
function compareObjectsShallowByStrategy(objectFirst, objectSecond, shallowComparisonStrategy) {
    function compareNested(o1, o2) {
        return (0, simpleTypeValuesComparison_1.areSimpleValuesEqual)(o1, o2);
    }
    const shallowStrategy = Object.assign(Object.assign({}, shallowComparisonStrategy), { compareObjects: compareNested, compareArrays: compareNested, compareOther: compareNested });
    const compareValues = (0, compareByStrategy_1.compareValuesFunctionFabric)(shallowStrategy);
    return compareObjectsDeepWithCompareValuesFunction(objectFirst, objectSecond, compareValues);
}
exports.compareObjectsShallowByStrategy = compareObjectsShallowByStrategy;
function compareObjectsDeepByStrategy(objectFirst, objectSecond, comparisonStrategy) {
    const compareValues = (0, compareByStrategy_1.compareValuesFunctionFabric)(comparisonStrategy);
    return compareObjectsDeepWithCompareValuesFunction(objectFirst, objectSecond, compareValues);
}
exports.compareObjectsDeepByStrategy = compareObjectsDeepByStrategy;
//# sourceMappingURL=objectComparison.js.map