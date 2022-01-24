"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntityAbstractClass = void 0;
const entityInitialize_1 = require("../constants/entityInitialize");
class BaseEntityAbstractClass {
    constructor(parameters, services) {
        if (!self[entityInitialize_1.ENTITY_INITIALIZER_SCOPE_NAME]) {
            throw new Error('The entity should be constructed within a certain scope');
        }
        if (!parameters) {
            throw new Error('Parameters must be passed to entity constructor');
        }
        if (!services) {
            throw new Error('Services must be passed to entity constructor');
        }
    }
    $initializeInstance() {
        this._validate();
        this._emitCreateEvent();
    }
}
exports.BaseEntityAbstractClass = BaseEntityAbstractClass;
//# sourceMappingURL=baseEntityAbstractClass.js.map