"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseValueObjectClassFabric = void 0;
const baseValueObject_1 = require("../../valueObjects/interfaces/abstractClasses/baseValueObject");
function baseValueObjectClassFabric({ compareValues, serializeValue, validateValue, }) {
    class ValueObjectBaseClass extends baseValueObject_1.BaseValueObject {
        equalsTo(vo) {
            return Boolean(compareValues(this.value, vo.value));
        }
        serialize() {
            return serializeValue(this.value);
        }
        _validate() {
            validateValue(this.value);
        }
    }
    return ValueObjectBaseClass;
}
exports.baseValueObjectClassFabric = baseValueObjectClassFabric;
//# sourceMappingURL=baseValueObjectClassFabrics.js.map