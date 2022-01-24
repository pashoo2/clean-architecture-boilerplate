"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidValueObject = void 0;
const baseValueObject_1 = require("../../valueObjects/interfaces/abstractClasses/baseValueObject");
class UuidValueObject extends baseValueObject_1.BaseValueObjectStringSerialization {
    _validate() {
        if (!/(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u.test(this.value)) {
            throw new Error('The identity should be compatible to UUID v4 format');
        }
    }
}
exports.UuidValueObject = UuidValueObject;
//# sourceMappingURL=uuidValueObject.js.map