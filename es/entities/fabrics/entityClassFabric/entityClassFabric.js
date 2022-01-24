"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityClassFabric = void 0;
const abstractClasses_1 = require("../../../entities/abstractClasses");
function entityClassFabric(parameters) {
    const { type, validateInstance, getTransferableProps } = parameters;
    class EntityConstructor extends abstractClasses_1.BaseEntity {
        constructor() {
            super(...arguments);
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
    // TODO - resolve any
    return EntityConstructor;
}
exports.entityClassFabric = entityClassFabric;
//# sourceMappingURL=entityClassFabric.js.map