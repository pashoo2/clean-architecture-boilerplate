"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleValuesValueObjectBaseFabric = void 0;
const abstractClasses_1 = require("../../valueObjects/interfaces/abstractClasses");
function multipleValuesValueObjectBaseFabric({ compareValues, serializeValue, validateValue, }) {
    class MultiValueObjectBaseClass extends abstractClasses_1.MultiValuesValueObject {
        equalsTo(vo) {
            return Boolean(compareValues(this.value, vo.value));
        }
        serialize() {
            return String(serializeValue(this.value));
        }
        _validate() {
            validateValue(this.value);
        }
    }
    return MultiValueObjectBaseClass;
}
exports.multipleValuesValueObjectBaseFabric = multipleValuesValueObjectBaseFabric;
//# sourceMappingURL=multipleValuesValueObjectBaseClassFabrics.js.map