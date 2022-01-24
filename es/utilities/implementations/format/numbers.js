"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pad = void 0;
function pad(num, len) {
    return (Array(len).join('0') + num).slice(-len);
}
exports.pad = pad;
//# sourceMappingURL=numbers.js.map