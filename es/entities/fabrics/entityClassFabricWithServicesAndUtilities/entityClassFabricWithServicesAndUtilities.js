"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityClassFabricWithServicesAndUtilities = void 0;
const baseEntityWithUtilities_1 = require("../../../entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities");
function entityClassFabricWithServicesAndUtilities(parameters, services, utilities) {
    const { type, validateInstance, getTransferableProps } = parameters;
    class EntityConstructor extends baseEntityWithUtilities_1.BaseEntityWithUtilities {
        constructor(parameters) {
            super(parameters, services, utilities);
            this._type = type;
        }
        _validate() {
            validateInstance(this);
        }
        _getTransferableProps() {
            // TODO - resolve any
            return getTransferableProps(this);
        }
    }
    return EntityConstructor;
}
exports.entityClassFabricWithServicesAndUtilities = entityClassFabricWithServicesAndUtilities;
//# sourceMappingURL=entityClassFabricWithServicesAndUtilities.js.map