"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareEntitiesIdentitiesUtility = void 0;
const index_1 = require("../../../utilities/implementations/typeGuards/index");
function compareEntitiesIdentitiesUtility(firstId, secondId) {
    const isFirstIdentitySimpleValue = (0, index_1.isSimpleType)(firstId.value);
    const isSecondIdentitySimpleValue = (0, index_1.isSimpleType)(secondId.value);
    if (isFirstIdentitySimpleValue !== isSecondIdentitySimpleValue) {
        return false;
    }
    if (isFirstIdentitySimpleValue && isSecondIdentitySimpleValue) {
        return firstId.equalsTo(secondId);
    }
    return firstId.equalsTo(secondId);
}
exports.compareEntitiesIdentitiesUtility = compareEntitiesIdentitiesUtility;
//# sourceMappingURL=compareEntitiesIdentities.js.map