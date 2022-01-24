"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityClassFabricWithServices = void 0;
const entityClassFabric_1 = require("../../../entities/fabrics/entityClassFabric/entityClassFabric");
function entityClassFabricWithServices(parameters, services) {
    const BaseEntityClass = (0, entityClassFabric_1.entityClassFabric)(parameters);
    // TODO - resolve any
    class EntityConstructor extends BaseEntityClass {
        constructor(parameters) {
            super(parameters, services);
        }
    }
    return EntityConstructor;
}
exports.entityClassFabricWithServices = entityClassFabricWithServices;
//# sourceMappingURL=entityClassFabricWithServices.js.map