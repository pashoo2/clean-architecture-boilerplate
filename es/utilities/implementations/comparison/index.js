"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shallowComparisonStrategy = exports.deepComparisonStrategy = exports.areSimpleValuesEqual = exports.areDatesEqual = exports.compareObjectsShallowByStrategy = exports.compareObjectsDeepWithCompareValuesFunction = exports.compareObjectsDeepByStrategy = exports.compareValuesFunctionFabric = exports.compareValuesByStrategy = void 0;
var compareByStrategy_1 = require("./compareByStrategy");
Object.defineProperty(exports, "compareValuesByStrategy", { enumerable: true, get: function () { return compareByStrategy_1.compareValuesByStrategy; } });
Object.defineProperty(exports, "compareValuesFunctionFabric", { enumerable: true, get: function () { return compareByStrategy_1.compareValuesFunctionFabric; } });
var objectComparison_1 = require("./objectComparison");
Object.defineProperty(exports, "compareObjectsDeepByStrategy", { enumerable: true, get: function () { return objectComparison_1.compareObjectsDeepByStrategy; } });
Object.defineProperty(exports, "compareObjectsDeepWithCompareValuesFunction", { enumerable: true, get: function () { return objectComparison_1.compareObjectsDeepWithCompareValuesFunction; } });
Object.defineProperty(exports, "compareObjectsShallowByStrategy", { enumerable: true, get: function () { return objectComparison_1.compareObjectsShallowByStrategy; } });
var objectTypeValuesComparison_1 = require("./objectTypeValuesComparison");
Object.defineProperty(exports, "areDatesEqual", { enumerable: true, get: function () { return objectTypeValuesComparison_1.areDatesEqual; } });
var simpleTypeValuesComparison_1 = require("./simpleTypeValuesComparison");
Object.defineProperty(exports, "areSimpleValuesEqual", { enumerable: true, get: function () { return simpleTypeValuesComparison_1.areSimpleValuesEqual; } });
var valuesComparisonStrategies_1 = require("./valuesComparisonStrategies");
Object.defineProperty(exports, "deepComparisonStrategy", { enumerable: true, get: function () { return valuesComparisonStrategies_1.deepComparisonStrategy; } });
Object.defineProperty(exports, "shallowComparisonStrategy", { enumerable: true, get: function () { return valuesComparisonStrategies_1.shallowComparisonStrategy; } });
//# sourceMappingURL=index.js.map