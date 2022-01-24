"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomainEntityEventMock = exports.DOMAIN_ENTITY_EVENT_MOCK_NAME = void 0;
const classes_1 = require("../../events/classes");
const identifiers_mock_1 = require("../../__mock__/services/identifiers.mock");
exports.DOMAIN_ENTITY_EVENT_MOCK_NAME = 'DOMAIN_ENTITY_EVENT_MOCK_NAME';
function getDomainEntityEventMock(entityId, entityType, eventName = exports.DOMAIN_ENTITY_EVENT_MOCK_NAME) {
    class DomainEntityEventMock extends classes_1.BaseDomainEntityEvent {
        constructor() {
            super(...arguments);
            this._name = eventName;
            this._entityType = entityType;
        }
    }
    DomainEntityEventMock.eventName = eventName;
    return new DomainEntityEventMock({
        id: (0, identifiers_mock_1.serviceGeneratorIdentifierUnique)(),
        entityId,
    });
}
exports.getDomainEntityEventMock = getDomainEntityEventMock;
//# sourceMappingURL=domainEvents.mock.js.map