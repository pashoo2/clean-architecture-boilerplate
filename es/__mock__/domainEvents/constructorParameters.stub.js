"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_MULTI_ENTITY_ID_STUB = exports.DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB = exports.DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_MULTI_ENTITY_ID_STUB = exports.DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB = exports.EVENT_TYPE_STUB = exports.EVENT_ENTITY_TYPE_STUB = exports.EVENT_NAME_STUB = exports.EVENT_IDENTITY_UNIQUE_STUB = void 0;
const eventType_1 = require("../../events/constants/eventType");
const entityType_stub_1 = require("../../__mock__/entityType.stub");
const valueObjects_mock_1 = require("../../__mock__/valueObjects.mock");
exports.EVENT_IDENTITY_UNIQUE_STUB = 'EVENT_IDENTITY_UNIQUE';
exports.EVENT_NAME_STUB = 'EVENT_NAME';
exports.EVENT_ENTITY_TYPE_STUB = entityType_stub_1.ENTITY_TYPE_STUB;
exports.EVENT_TYPE_STUB = eventType_1.EDomainEntityEventType.ENTITY_EVENT;
exports.DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB = {
    id: exports.EVENT_IDENTITY_UNIQUE_STUB,
    metaVersion: 1,
    entityId: new valueObjects_mock_1.SimpleIdentityValueObjectClassMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB),
};
exports.DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_MULTI_ENTITY_ID_STUB = Object.assign(Object.assign({}, exports.DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB), { entityId: new valueObjects_mock_1.MultipleIdentityValueObjectClassMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_MULTI_STUB) });
exports.DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB = {
    id: exports.EVENT_IDENTITY_UNIQUE_STUB,
    payload: { isPayload: true },
    entityId: new valueObjects_mock_1.SimpleIdentityValueObjectClassMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB),
};
exports.DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_MULTI_ENTITY_ID_STUB = Object.assign(Object.assign({}, exports.DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB), { entityId: new valueObjects_mock_1.MultipleIdentityValueObjectClassMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_MULTI_STUB) });
//# sourceMappingURL=constructorParameters.stub.js.map