"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityClassWithDeleteMethodServicesAndUtilitiesFabric = void 0;
const entityClassFabricWithServicesAndUtilities_1 = require("../../../entities/fabrics/entityClassFabricWithServicesAndUtilities");
function entityClassWithDeleteMethodServicesAndUtilitiesFabric(parameters, services, utilities) {
    class EntityConstructorWithDeleteMethod extends (0, entityClassFabricWithServicesAndUtilities_1.entityClassFabricWithServicesAndUtilities)(parameters, services, utilities) {
        $markDeleted() {
            // TODO - find a way to resolve the instance type without casting to ANY
            this._delete();
        }
    }
    return EntityConstructorWithDeleteMethod;
}
exports.entityClassWithDeleteMethodServicesAndUtilitiesFabric = entityClassWithDeleteMethodServicesAndUtilitiesFabric;
//# sourceMappingURL=entityClassWithDeleteMethodServicesAndUtilitiesFabric.js.map