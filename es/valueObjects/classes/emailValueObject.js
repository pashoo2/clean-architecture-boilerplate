"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVO = void 0;
const baseValueObject_1 = require("../../valueObjects/interfaces/abstractClasses/baseValueObject");
function getEmailValidationRegexp() {
    // https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
}
class EmailVO extends baseValueObject_1.BaseValueObjectStringSerialization {
    _validate() {
        const trimmedEmail = this.value.trim();
        if (trimmedEmail.startsWith('.') ||
            trimmedEmail.includes('.@') ||
            trimmedEmail.includes('@.') ||
            trimmedEmail.includes(' ') ||
            trimmedEmail.includes('..') ||
            !/@.*\./.test(trimmedEmail) ||
            /@\d{3}\.\d{3}\.\d{3}\.\d{4,}/.test(trimmedEmail) ||
            !getEmailValidationRegexp().test(trimmedEmail)) {
            throw new Error('The email is not valid');
        }
    }
}
exports.EmailVO = EmailVO;
//# sourceMappingURL=emailValueObject.js.map