"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepComparisonStrategy = exports.shallowComparisonStrategy = void 0;
const objectTypeValuesComparison_1 = require("./objectTypeValuesComparison");
const simpleTypeValuesComparison_1 = require("./simpleTypeValuesComparison");
const objectComparison_1 = require("./objectComparison");
exports.shallowComparisonStrategy = {
    compareDates: objectTypeValuesComparison_1.areDatesEqual,
    compareSimpleType: simpleTypeValuesComparison_1.areSimpleValuesEqual,
};
exports.deepComparisonStrategy = Object.assign(Object.assign({}, exports.shallowComparisonStrategy), { compareObjects: objectComparison_1.compareObjectsDeepByStrategy, compareArrays: objectComparison_1.compareObjectsDeepByStrategy, compareOther: simpleTypeValuesComparison_1.areSimpleValuesEqual });
//# sourceMappingURL=valuesComparisonStrategies.js.map