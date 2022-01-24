"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateClassFabric = void 0;
const abstractClasses_1 = require("../../../aggregates/abstractClasses");
function aggregateClassFabric({ type, getServices, validateInstance, getTransferableProps, compareEntitiesTypes, compareEntitiesIdentities, }) {
    class AggregateRootConstructor extends abstractClasses_1.BaseAggregateRootAbstractClass {
        constructor(parameters) {
            super(parameters, getServices());
            this._type = type;
        }
        _validate() {
            validateInstance(this);
        }
        _getTransferableProps() {
            const transferableProps = getTransferableProps(this);
            // TODO - resolve the type
            return transferableProps;
        }
        _compareEntitiesIdentities(firstId, secondId) {
            return compareEntitiesIdentities(firstId, secondId);
        }
        _compareEntitiesTypes(firstType, secondType) {
            return compareEntitiesTypes(firstType, secondType);
        }
    }
    // TODO - fix
    return AggregateRootConstructor;
}
exports.aggregateClassFabric = aggregateClassFabric;
//# sourceMappingURL=aggregateClassFabric.js.map