"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDomainEntityEventConstructor = void 0;
const baseDomainEntityEvent_1 = require("../../../events/classes/baseDomainEntityEvent");
function createDomainEntityEventConstructor({ eventName, entityType, }) {
    class DomainEntityEvent extends baseDomainEntityEvent_1.BaseDomainEntityEvent {
        constructor() {
            super(...arguments);
            this._name = eventName;
            this._entityType = entityType;
        }
    }
    DomainEntityEvent.eventName = eventName;
    return DomainEntityEvent;
}
exports.createDomainEntityEventConstructor = createDomainEntityEventConstructor;
//# sourceMappingURL=fabricDomainEntityEventConstructor.js.map