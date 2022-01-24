"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceGenerateUniqueIdentifier = void 0;
let currentIndex = 0;
const serviceGenerateUniqueIdentifier = function generateUniqueIdentifier() {
    return `${Date.now()}${(currentIndex += 1)}`;
};
exports.serviceGenerateUniqueIdentifier = serviceGenerateUniqueIdentifier;
//# sourceMappingURL=serviceGenerateUniqueIdentifier.js.map