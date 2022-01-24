"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDomainEventBus = void 0;
class BaseDomainEventBus {
    constructor(__eventEmitter) {
        this.__eventEmitter = __eventEmitter;
        this._listenersAllEvents = new Set();
    }
    get _eventEmitter() {
        return this.__eventEmitter;
    }
    emit(event) {
        this._eventEmitter.emit(event.name, event);
        this._emitEventForAllEventsListeners(event);
    }
    emitEventFailed(eventFailed) {
        this._eventEmitter.emit(eventFailed.name, eventFailed);
        this._emitEventForAllEventsListeners(eventFailed);
    }
    subscribeAllEvents(eventListener) {
        this._listenersAllEvents.add(eventListener);
    }
    subscribe(eventName, eventListener) {
        this._eventEmitter.addListener(String(eventName), eventListener);
    }
    subscribeOnFailed(eventName, eventListener) {
        const failedEventName = this._getFailedEventNameByEventName(eventName);
        this._eventEmitter.addListener(failedEventName, eventListener);
    }
    unsubscribe(eventName, eventListener) {
        this._eventEmitter.removeListener(String(eventName), eventListener);
        this._eventEmitter.removeListener(this._getFailedEventNameByEventName(eventName), eventListener);
    }
    unsubscribeListenerAllEvents(eventListener) {
        this._listenersAllEvents.delete(eventListener);
    }
    _getFailedEventNameByEventName(eventName) {
        return `failed::${eventName}`;
    }
    _emitEventForAllEventsListeners(event) {
        this._listenersAllEvents.forEach(listener => listener(event));
    }
}
exports.BaseDomainEventBus = BaseDomainEventBus;
//# sourceMappingURL=baseDomainEventBus.js.map