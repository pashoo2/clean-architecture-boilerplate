"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityClassWithDeleteMethodFabric = void 0;
const entityClassFabric_1 = require("../../../entities/fabrics/entityClassFabric");
function entityClassWithDeleteMethodFabric(parameters) {
    class EntityConstructorWithDeleteMethod extends (0, entityClassFabric_1.entityClassFabric)(parameters) {
        $markDeleted() {
            // TODO - find a way to resolve the instance type without casting to ANY
            this._delete();
        }
    }
    return EntityConstructorWithDeleteMethod;
}
exports.entityClassWithDeleteMethodFabric = entityClassWithDeleteMethodFabric;
//# sourceMappingURL=entityClassWithDeleteMethodFabric.js.map