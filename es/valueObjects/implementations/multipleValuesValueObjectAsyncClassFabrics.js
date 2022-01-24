"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleValuesValueObjectAsyncFabric = void 0;
const abstractClasses_1 = require("../../valueObjects/interfaces/abstractClasses");
function multipleValuesValueObjectAsyncFabric({ compareValues, serializeValue, validateValue, }) {
    class MultiValueObjectAsyncClass extends abstractClasses_1.MultiValuesValueObjectAsync {
        equalsTo(vo) {
            return __awaiter(this, void 0, void 0, function* () {
                return Boolean(yield compareValues(this.value, vo.value));
            });
        }
        serialize() {
            return __awaiter(this, void 0, void 0, function* () {
                return String(yield serializeValue(this.value));
            });
        }
        _validate() {
            validateValue(this.value);
        }
    }
    return MultiValueObjectAsyncClass;
}
exports.multipleValuesValueObjectAsyncFabric = multipleValuesValueObjectAsyncFabric;
//# sourceMappingURL=multipleValuesValueObjectAsyncClassFabrics.js.map