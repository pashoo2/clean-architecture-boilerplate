"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.definedOrThrow = void 0;
function definedOrThrow(v) {
    if (v === undefined) {
        throw new Error('Value is not defined');
    }
    return v;
}
exports.definedOrThrow = definedOrThrow;
//# sourceMappingURL=definedOrThrow.js.map