"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDomainEventBus = exports.getMockDomainEventBus = void 0;
const events_1 = __importDefault(require("events"));
const baseDomainEventBus_1 = require("../../events/classes/baseDomainEventBus/baseDomainEventBus");
const getMockDomainEventBus = () => new baseDomainEventBus_1.BaseDomainEventBus(new events_1.default());
exports.getMockDomainEventBus = getMockDomainEventBus;
exports.mockDomainEventBus = (0, exports.getMockDomainEventBus)();
//# sourceMappingURL=domainEventsBus.mock.js.map