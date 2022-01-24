"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiValuesValueObject = void 0;
class MultiValuesValueObject {
    constructor(__value) {
        this.__value = __value;
        this._validate();
    }
    get value() {
        return this.__value;
    }
    equalsTo(anotherValueObject) {
        const { value: anotherValueObjectValue } = anotherValueObject;
        const anotherValueObjectValueKeys = Object.keys(anotherValueObjectValue);
        if (anotherValueObjectValueKeys.length !== Object.keys(this.__value).length) {
            return false;
        }
        return Object.keys(anotherValueObjectValue).every(key => {
            const valueForKeyAnotherObject = anotherValueObjectValue[key];
            const valueForKeyThisObject = this.value[key];
            if (valueForKeyAnotherObject === valueForKeyThisObject) {
                return true;
            }
            if (valueForKeyAnotherObject instanceof Date &&
                valueForKeyThisObject instanceof Date) {
                return (valueForKeyAnotherObject.getMilliseconds() ===
                    valueForKeyThisObject.getMilliseconds() &&
                    valueForKeyAnotherObject.toISOString() ===
                        valueForKeyThisObject.toISOString());
            }
            return false;
        });
    }
}
exports.MultiValuesValueObject = MultiValuesValueObject;
//# sourceMappingURL=multiValuesValueObject.js.map