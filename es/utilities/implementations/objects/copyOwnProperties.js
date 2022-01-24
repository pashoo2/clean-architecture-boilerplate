"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyOwnPropertiesIntoTarget = void 0;
function copyOwnPropertiesIntoTarget(target, baseObject) {
    Object.getOwnPropertyNames(baseObject).forEach(name => {
        Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(baseObject, name) || Object.create(null));
    });
    return true;
}
exports.copyOwnPropertiesIntoTarget = copyOwnPropertiesIntoTarget;
//# sourceMappingURL=copyOwnProperties.js.map