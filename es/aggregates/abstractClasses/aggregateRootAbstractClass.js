"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAggregateRootAbstractClass = void 0;
const abstractClasses_1 = require("../../entities/abstractClasses");
class BaseAggregateRootAbstractClass extends abstractClasses_1.BaseEntity {
    delete() {
        this._delete();
    }
}
exports.BaseAggregateRootAbstractClass = BaseAggregateRootAbstractClass;
//# sourceMappingURL=aggregateRootAbstractClass.js.map