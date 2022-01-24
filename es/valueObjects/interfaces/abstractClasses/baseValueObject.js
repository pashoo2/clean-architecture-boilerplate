"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseValueObjectStringSerialization = exports.BaseValueObject = void 0;
class BaseValueObject {
    constructor(__value) {
        this.__value = __value;
        this._validate();
    }
    get value() {
        return this.__value;
    }
    equalsTo(anotherValueObject) {
        return anotherValueObject.value === this.value;
    }
}
exports.BaseValueObject = BaseValueObject;
class BaseValueObjectStringSerialization extends BaseValueObject {
    serialize() {
        if (typeof this.value === 'string') {
            return this.value;
        }
        return JSON.stringify(this.value);
    }
}
exports.BaseValueObjectStringSerialization = BaseValueObjectStringSerialization;
//# sourceMappingURL=baseValueObject.js.map