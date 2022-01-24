"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntityWithUtilities = void 0;
const baseEntity_1 = require("../../../entities/abstractClasses/baseEntity/baseEntity");
class BaseEntityWithUtilities extends baseEntity_1.BaseEntity {
    constructor(parameters, services, _utilities) {
        super(parameters, services);
        this._utilities = _utilities;
        if (!_utilities) {
            throw new Error('Utilities must be passed as a constructor parameter');
        }
    }
    _compareEntitiesIdentities(firstId, secondId) {
        return this._utilities.compareEntitiesIdentities(firstId, secondId);
    }
    _compareEntitiesTypes(firstType, secondType) {
        return this._utilities.compareEntitiesTypes(firstType, secondType);
    }
}
exports.BaseEntityWithUtilities = BaseEntityWithUtilities;
//# sourceMappingURL=baseEntityWithUtilities.js.map