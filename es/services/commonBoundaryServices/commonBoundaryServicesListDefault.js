"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonBoundaryServicesListDefault = void 0;
const serviceGenerateUniqueIdentifier_1 = require("./implementations/serviceGenerateUniqueIdentifier");
exports.CommonBoundaryServicesListDefault = {
    common: {
        generators: {
            generateUniqueIdentifier: serviceGenerateUniqueIdentifier_1.serviceGenerateUniqueIdentifier,
        },
    },
};
//# sourceMappingURL=commonBoundaryServicesListDefault.js.map