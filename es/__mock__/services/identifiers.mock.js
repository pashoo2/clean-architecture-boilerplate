"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceGeneratorIdentifierUnique = void 0;
const format_1 = require("../../utilities/implementations/format");
exports.serviceGeneratorIdentifierUnique = (() => {
    let callNumber = 0;
    return function getUniqueIdentifierString() {
        return '123e4567-e89b-12d3-a456-426614174' + (0, format_1.pad)((callNumber += 1), 3);
    };
})();
//# sourceMappingURL=identifiers.mock.js.map