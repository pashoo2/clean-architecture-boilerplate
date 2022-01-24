"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesContainerBase = void 0;
const objects_1 = require("../../../utilities/implementations/objects");
const serviceContainerAbstractClass_1 = require("../../interfaces/abstractClasses/serviceContainerAbstractClass");
class ServicesContainerBase extends serviceContainerAbstractClass_1.ServicesContainerAbstractClass {
    constructor(__services) {
        super(__services);
        this.__services = __services;
        if (!__services) {
            throw new Error('A services list should be passed as a parameter');
        }
    }
    registerServices(updatedServices) {
        this.__services = (0, objects_1.mergeDeep)({}, this.__services, updatedServices);
    }
    getServices() {
        return this.__services;
    }
    getBoundaryServices(boundaryName) {
        const boundaryServices = this.getServices()[boundaryName];
        if (!boundaryServices) {
            throw new Error('There is no services registered for the boundary');
        }
        return this.getServices()[boundaryName];
    }
}
exports.ServicesContainerBase = ServicesContainerBase;
//# sourceMappingURL=servicesContainerBase.js.map