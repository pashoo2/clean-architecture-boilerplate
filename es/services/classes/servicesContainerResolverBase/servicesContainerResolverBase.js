"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesContainerResolverBase = void 0;
class ServicesContainerResolverBase {
    constructor(_servicesContainerDefault) {
        this._servicesContainerDefault = _servicesContainerDefault;
    }
    getServicesContainer() {
        const servicesContainer = this._getServicesContainerOrDefaultOrUndefined();
        if (!servicesContainer) {
            throw new Error('There is no services container previously set');
        }
        return servicesContainer;
    }
    setServicesContainer(servicesContainer) {
        const { _servicesContainer } = this;
        if (_servicesContainer) {
            throw new Error('A services container has already been set');
        }
        if (!servicesContainer || typeof servicesContainer !== 'object') {
            throw new Error('Services container must be provided');
        }
        this._servicesContainer = servicesContainer;
    }
    _getServicesContainerOrDefaultOrUndefined() {
        var _a;
        const { _servicesContainer, _servicesContainerDefault } = this;
        return (_a = _servicesContainer !== null && _servicesContainer !== void 0 ? _servicesContainer : _servicesContainerDefault) !== null && _a !== void 0 ? _a : undefined;
    }
}
exports.ServicesContainerResolverBase = ServicesContainerResolverBase;
//# sourceMappingURL=servicesContainerResolverBase.js.map