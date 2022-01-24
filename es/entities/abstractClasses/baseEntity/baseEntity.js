"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const index_1 = require("../../../events/classes/baseDomainEntityConstructEvent/index");
const index_2 = require("../../../events/classes/baseDomainEntityDeleteEvent/index");
const baseEntityAbstractClass_1 = require("../../../entities/abstractClasses/baseEntityAbstractClass");
class BaseEntity extends baseEntityAbstractClass_1.BaseEntityAbstractClass {
    constructor(parameters, services) {
        super(parameters, services);
        const { id, isDeleted } = parameters;
        const { domainEventBus, generateUniqueIdentifierString } = services;
        if (!id) {
            throw new Error('Each entity should have a unique identity');
        }
        if (!domainEventBus) {
            throw new Error('Domain event emitter service must be provided');
        }
        this.__id = id;
        this.__isDeleted = isDeleted;
        this.__domainEventBus = domainEventBus;
        this.__generateUniqueIdentityString = generateUniqueIdentifierString;
        this._EntityDeleteEventClass = this.__getEntityDeleteEventClass();
        this._EntityCreateEventClass = this.__getEntityCreateEventClass();
    }
    get id() {
        return this.__id;
    }
    get isDeleted() {
        return this.__isDeleted;
    }
    get type() {
        return this._type;
    }
    get _domainEventBus() {
        return this.__domainEventBus;
    }
    get _generateUniqueIdentityString() {
        return this.__generateUniqueIdentityString;
    }
    equalsTo(anotherEntity) {
        return (this._compareEntitiesTypes(this.type, anotherEntity.type) &&
            this._compareEntitiesIdentities(this.id, anotherEntity.id));
    }
    getTransferableProps() {
        return this._getTransferableProps();
    }
    emit(event) {
        this._domainEventBus.emit(event);
    }
    emitEventFailed(eventFailed) {
        this._domainEventBus.emitEventFailed(eventFailed);
    }
    subscribe(eventName, eventListener) {
        this._domainEventBus.subscribe(eventName, eventListener);
    }
    subscribeOnFailed(eventName, eventListener) {
        this._domainEventBus.subscribeOnFailed(eventName, eventListener);
    }
    unsubscribe(eventName, eventListener) {
        this._domainEventBus.unsubscribe(eventName, eventListener);
    }
    _compareEntitiesIdentities(firstId, secondId) {
        return firstId.equalsTo(secondId);
    }
    _compareEntitiesTypes(firstType, secondType) {
        return firstType === secondType;
    }
    _delete() {
        if (this.isDeleted) {
            return;
        }
        this._markDeleted();
        this._emitDeleteEvent();
    }
    _markDeleted() {
        this.__isDeleted = true;
    }
    _emitDeleteEvent() {
        const event = this.__createEntityDeleteEventInstance();
        this.emit(event);
    }
    _emitCreateEvent() {
        const event = this.__createEntityCreateEventInstance();
        this.emit(event);
    }
    _getEventUniqueIdentity() {
        return this._generateUniqueIdentityString();
    }
    __getEntityDeleteEventClass() {
        const entityType = this.type;
        class DeleteEntityEvent extends index_2.BaseDomainEntityDeleteEvent {
            constructor() {
                super(...arguments);
                this._entityType = entityType;
            }
        }
        return DeleteEntityEvent;
    }
    __getEntityCreateEventClass() {
        const entityType = this.type;
        class CreateEntityEvent extends index_1.BaseDomainEntityCreateEvent {
            constructor() {
                super(...arguments);
                this._entityType = entityType;
            }
        }
        return CreateEntityEvent;
    }
    __createEntityDeleteEventInstance() {
        const DeleteEntityEventClass = this._EntityDeleteEventClass;
        return new DeleteEntityEventClass({
            entityId: this.id,
            id: this._getEventUniqueIdentity(),
        });
    }
    __createEntityCreateEventInstance() {
        const CreateEntityEventClass = this._EntityCreateEventClass;
        return new CreateEntityEventClass({
            entityId: this.id,
            id: this._getEventUniqueIdentity(),
        });
    }
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=baseEntity.js.map