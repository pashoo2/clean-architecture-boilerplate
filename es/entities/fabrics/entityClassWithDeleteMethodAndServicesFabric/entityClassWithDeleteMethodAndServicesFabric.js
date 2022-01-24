"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityClassWithDeleteMethodAndServicesFabric = void 0;
const entityClassFabricWithServices_1 = require("../../../entities/fabrics/entityClassFabricWithServices");
function entityClassWithDeleteMethodAndServicesFabric(parameters, services) {
    class EntityConstructorWithDeleteMethod extends (0, entityClassFabricWithServices_1.entityClassFabricWithServices)(parameters, services) {
        $markDeleted() {
            // TODO - find a way to resolve the instance type without casting to ANY
            this._delete();
        }
    }
    return EntityConstructorWithDeleteMethod;
}
exports.entityClassWithDeleteMethodAndServicesFabric = entityClassWithDeleteMethodAndServicesFabric;
//# sourceMappingURL=entityClassWithDeleteMethodAndServicesFabric.js.map