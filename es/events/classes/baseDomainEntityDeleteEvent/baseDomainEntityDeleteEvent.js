"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDomainEntityDeleteEvent = void 0;
const domainEvents_1 = require("../../../constants/domainEvents");
const baseDomainEntityEvent_1 = require("../../../events/classes/baseDomainEntityEvent");
class BaseDomainEntityDeleteEvent extends baseDomainEntityEvent_1.BaseDomainEntityEvent {
    constructor() {
        super(...arguments);
        this._name = domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_DELETE;
    }
}
exports.BaseDomainEntityDeleteEvent = BaseDomainEntityDeleteEvent;
BaseDomainEntityDeleteEvent.eventName = domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_DELETE;
//# sourceMappingURL=baseDomainEntityDeleteEvent.js.map