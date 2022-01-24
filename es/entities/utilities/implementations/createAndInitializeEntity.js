"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAndInitializeEntity = void 0;
const entityInitialize_1 = require("../../constants/entityInitialize");
function createAndInitializeEntity(EntityConstructor, ...parameters) {
    self[entityInitialize_1.ENTITY_INITIALIZER_SCOPE_NAME] = true;
    const instance = new EntityConstructor(...parameters);
    delete self[entityInitialize_1.ENTITY_INITIALIZER_SCOPE_NAME];
    instance.$initializeInstance();
    return instance;
}
exports.createAndInitializeEntity = createAndInitializeEntity;
//# sourceMappingURL=createAndInitializeEntity.js.map