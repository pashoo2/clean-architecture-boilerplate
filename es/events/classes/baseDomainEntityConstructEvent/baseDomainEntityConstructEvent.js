"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDomainEntityConstructEvent = void 0;
const domainEvents_1 = require("../../../constants/domainEvents");
const baseDomainEntityEvent_1 = require("../../../events/classes/baseDomainEntityEvent");
class BaseDomainEntityConstructEvent extends baseDomainEntityEvent_1.BaseDomainEntityEvent {
    constructor() {
        super(...arguments);
        this._name = domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;
    }
}
exports.BaseDomainEntityConstructEvent = BaseDomainEntityConstructEvent;
BaseDomainEntityConstructEvent.eventName = domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;
//# sourceMappingURL=baseDomainEntityConstructEvent.js.map