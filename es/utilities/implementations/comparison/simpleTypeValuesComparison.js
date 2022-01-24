"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areSimpleValuesEqual = void 0;
const isSimpleType_1 = require("../typeGuards/isSimpleType");
function areSimpleValuesEqual(value1, value2) {
    if (arguments.length === 0) {
        return false;
    }
    if (value1 === value2) {
        return true;
    }
    if ((0, isSimpleType_1.isAnyNumber)(value1) && (0, isSimpleType_1.isAnyNumber)(value2)) {
        return (value1 === value2 ||
            (Number.isNaN(value1) && Number.isNaN(value2)));
    }
    if ((0, isSimpleType_1.isString)(value1) && (0, isSimpleType_1.isString)(value2)) {
        return value1.trim() === value2.trim();
    }
    return false;
}
exports.areSimpleValuesEqual = areSimpleValuesEqual;
//# sourceMappingURL=simpleTypeValuesComparison.js.map