"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDomainEntityEvent = void 0;
const baseDomainEvent_1 = require("../../../events/classes/baseDomainEvent/baseDomainEvent");
const eventType_1 = require("../../../events/constants/eventType");
class BaseDomainEntityEvent extends baseDomainEvent_1.BaseDomainEventClass {
    constructor(parameters) {
        super(parameters);
        this.__entityId = parameters.entityId;
    }
    get entityId() {
        return this.__entityId;
    }
    get entityType() {
        return this._entityType;
    }
    get eventType() {
        return eventType_1.EDomainEntityEventType.ENTITY_EVENT;
    }
    _getSerializableObjectRepresentation() {
        const baseDomainEventObjectRepresentation = super._getSerializableObjectRepresentation();
        return Object.assign(Object.assign({}, baseDomainEventObjectRepresentation), { entityId: this.entityId.value, entityType: this.entityType, eventType: this.eventType });
    }
}
exports.BaseDomainEntityEvent = BaseDomainEntityEvent;
//# sourceMappingURL=baseDomainEntityEvent.js.map