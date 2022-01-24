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
exports.convertTransferableToSerializableAsync = void 0;
const isSimpleTypeOrArrayOrObject_1 = require("../../typeGuards/isSimpleTypeOrArrayOrObject");
function convertTransferableToSerializableAsync(objectTransferable) {
    return __awaiter(this, void 0, void 0, function* () {
        const serializableValues = {};
        yield Promise.all(Object.keys(objectTransferable).map((propertyName) => __awaiter(this, void 0, void 0, function* () {
            // TODO - there is an error if this hack is not used
            let value = undefined;
            const key = propertyName;
            value = objectTransferable[key];
            if ((0, isSimpleTypeOrArrayOrObject_1.isSimpleTypeOrArrayOrObject)(value) || value instanceof Date) {
                serializableValues[key] = value;
                return;
            }
            if (typeof value.serialize === 'function') {
                const serializationResult = yield value.serialize();
                serializableValues[key] =
                    serializationResult;
                return;
            }
            if (typeof value === 'object' &&
                typeof value.getTransferableProps === 'function') {
                serializableValues[key] = (yield convertTransferableToSerializableAsync(value.getTransferableProps()));
                return;
            }
            serializableValues[key] = value.toString();
        })));
        return serializableValues;
    });
}
exports.convertTransferableToSerializableAsync = convertTransferableToSerializableAsync;
//# sourceMappingURL=convertTransferableToSerializable.js.map