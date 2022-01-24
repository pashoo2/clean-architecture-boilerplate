"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areDatesEqual = void 0;
function areDatesEqual(d1, d2) {
    if (!(d1 instanceof Date) || !(d2 instanceof Date)) {
        return false;
    }
    return (d1.getMilliseconds() === d2.getMilliseconds() &&
        d1.toISOString() === d2.toISOString());
}
exports.areDatesEqual = areDatesEqual;
//# sourceMappingURL=objectTypeValuesComparison.js.map