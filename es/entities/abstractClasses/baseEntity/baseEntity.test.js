"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEntityTests = void 0;
const domainEvents_1 = require("../../../constants/domainEvents");
const baseEntity_1 = require("../../../entities/abstractClasses/baseEntity/baseEntity");
const domainEvents_mock_1 = require("../../../__mock__/domainEvents/domainEvents.mock");
const entityType_stub_1 = require("../../../__mock__/entityType.stub");
const domainEventsBus_mock_1 = require("../../../__mock__/services/domainEventsBus.mock");
const identifiers_mock_1 = require("../../../__mock__/services/identifiers.mock");
const valueObjects_mock_1 = require("../../../__mock__/valueObjects.mock");
const implementations_1 = require("../../utilities/implementations");
function runEntityTests(getTestsParams) {
    let { entity, entityUniqueIdentifier, entityType, parameters, services, isDeleted, EntityClass, entityEventName, entityEventFailedName, } = getTestsParams();
    beforeEach(() => {
        ({
            entity,
            entityUniqueIdentifier,
            entityType,
            parameters,
            services,
            isDeleted,
            EntityClass,
            entityEventName,
            entityEventFailedName,
        } = getTestsParams());
    });
    it('Should have "id" property equals to an identity passed into parameters', () => {
        expect(entity.id).toBe(entityUniqueIdentifier);
    });
    it(`Should have "type" property equals to ${entityType}`, () => {
        expect(entity.id).toBe(entityUniqueIdentifier);
    });
    it('Should have "isDeleted" property equals to the value passed in the parameter', () => {
        expect(entity.isDeleted).toBe(isDeleted);
    });
    describe('"equalsTo" method', () => {
        it('Should have "equalsTo" method', () => {
            expect(typeof entity.equalsTo === 'function').toBe(true);
        });
        it('Should return true for an entity with the same id', () => {
            expect(entity.equalsTo((0, implementations_1.createAndInitializeEntity)(EntityClass, parameters, services))).toBe(true);
        });
        it('Should return false for an event with an id that is not equal to the identity of the entity', () => {
            expect(entity.equalsTo((0, implementations_1.createAndInitializeEntity)(EntityClass, Object.assign(Object.assign({}, parameters), { id: new valueObjects_mock_1.SimpleIdentityValueObjectClassWithComparisonMock(String(Math.random())) }), services))).toBe(false);
        });
        it('Should return for an entity with another type', () => {
            class AnotherTypeEntity extends EntityClass {
                constructor(parameters, services) {
                    super(parameters, services);
                    this._type = `ANOTHER_${entityType}`;
                }
            }
            expect(entity.equalsTo((0, implementations_1.createAndInitializeEntity)(AnotherTypeEntity, parameters, services))).toBe(false);
        });
    });
    describe('"getTransferableProps"', () => {
        it('Should have "getTransferableProps"', () => {
            expect(entity.getTransferableProps).toEqual(expect.any(Function));
        });
        it('Should return properties of the entity', () => {
            expect(entity.getTransferableProps()).toEqual({
                id: parameters.id,
                type: entityType,
                isDeleted: parameters.isDeleted,
            });
        });
    });
    it(`Should emit instance created event "${domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED}" after event instance have been constructed`, () => {
        const listenerEntityConstructedEvents = jest.fn();
        services.domainEventBus.subscribe(domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED, listenerEntityConstructedEvents);
        expect(() => (0, implementations_1.createAndInitializeEntity)(EntityClass, parameters, services)).not.toThrow();
        expect(listenerEntityConstructedEvents).toHaveBeenCalledWith(expect.objectContaining({
            entityId: parameters.id,
            name: domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED,
        }));
    });
    describe('Entity events', () => {
        let entityServiceParameterEventBus;
        let eventTest;
        let eventFailedTest;
        beforeEach(() => {
            entityServiceParameterEventBus = services.domainEventBus;
            eventTest = (0, domainEvents_mock_1.getDomainEntityEventMock)(parameters.id, entityType, entityEventName);
            eventFailedTest = {
                name: entityEventFailedName,
                failedEvent: eventTest,
                error: new Error(),
            };
        });
        it('Should have the "emit" method', () => {
            expect(entity.emit).toEqual(expect.any(Function));
        });
        it('Should have the "emitEventFailed" method', () => {
            expect(entity.emitEventFailed).toEqual(expect.any(Function));
        });
        it('Should have "subscribe" method', () => {
            expect(entity.subscribe).toEqual(expect.any(Function));
        });
        it("Should emit events via a domain events bus service's instance", () => {
            const eventExpectedListener = jest.fn();
            entityServiceParameterEventBus.subscribe(entityEventName, eventExpectedListener);
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledTimes(1);
            expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
        });
        it('Should call a callback passed as the "subscribe" method\'s argument whenever an event is fired', () => {
            const eventExpectedListener = jest.fn();
            entity.subscribe(entityEventName, eventExpectedListener);
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledTimes(1);
            expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
        });
        it('Should not call a callback passed as the "subscribe" method\'s argument whenever a failed event is fired', () => {
            const eventExpectedListener = jest.fn();
            entity.subscribe(entityEventName, eventExpectedListener);
            entityServiceParameterEventBus.subscribe(entityEventName, eventExpectedListener);
            expect(() => entityServiceParameterEventBus.emitEventFailed(eventFailedTest)).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledTimes(0);
        });
        it('Should call a callback passed as the "subscribeOnFailed" method\'s argument whenever a event failed is fired', () => {
            const eventFailedExpectedListener = jest.fn();
            expect(() => entity.subscribeOnFailed(entityEventName, eventFailedExpectedListener)).not.toThrow();
            expect(() => entityServiceParameterEventBus.subscribeOnFailed(entityEventName, eventFailedExpectedListener)).not.toThrow();
            expect(() => entityServiceParameterEventBus.emitEventFailed(eventFailedTest)).not.toThrow();
            expect(eventFailedExpectedListener).toHaveBeenLastCalledWith(eventFailedTest);
        });
        it('Should not call a callback passed as the "subscribeOnFailed" method\'s argument whenever an event is fired', () => {
            const eventFailedExpectedListener = jest.fn();
            entity.subscribeOnFailed(entityEventName, eventFailedExpectedListener);
            entityServiceParameterEventBus.subscribeOnFailed(entityEventName, eventFailedExpectedListener);
            expect(() => entityServiceParameterEventBus.emit(eventTest)).not.toThrow();
            expect(eventFailedExpectedListener).toHaveBeenCalledTimes(0);
        });
        test('All events emitted must be able to be listened with a subscription through the "subscribeAllEvents" event bus method', () => {
            const allEventsListener = jest.fn();
            entityServiceParameterEventBus.subscribeAllEvents(allEventsListener);
            entity.emit(eventTest);
            entity.emitEventFailed(eventFailedTest);
            expect(allEventsListener).toBeCalledTimes(2);
            expect(allEventsListener).toHaveBeenCalledWith(eventTest);
            expect(allEventsListener).toHaveBeenCalledWith(eventFailedTest);
        });
        it('Should not call a callback function that had been passed as a parameter to the "subscribe" method, if it have been passed as a parameter to the "unsubscribe" method', () => {
            const eventExpectedListener = jest.fn();
            expect(() => entity.subscribe(entityEventName, eventExpectedListener)).not.toThrow();
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
            eventExpectedListener.mockClear();
            expect(() => entity.unsubscribe(entityEventName, eventExpectedListener)).not.toThrow();
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(eventExpectedListener).not.toHaveBeenCalled();
        });
        it('Should call a callback function that had been passed as a parameter to the "subscribe" method of a domain events service bus, if it have been passed as a parameter to the "unsubscribe" method', () => {
            const eventExpectedListener = jest.fn();
            const entityServiceParameterEventBusExpectedEventListener = jest.fn();
            expect(() => entityServiceParameterEventBus.subscribe(entityEventName, entityServiceParameterEventBusExpectedEventListener)).not.toThrow();
            expect(() => entity.subscribe(entityEventName, eventExpectedListener)).not.toThrow();
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
            eventExpectedListener.mockClear();
            expect(() => entity.unsubscribe(entityEventName, eventExpectedListener)).not.toThrow();
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(entityServiceParameterEventBusExpectedEventListener).toHaveBeenCalled();
        });
        it('Should not call a callback function that had been passed as a parameter to the "subscribeOnFailed" method, if it have been passed as a parameter to the "unsubscribe" method', () => {
            const eventFailedExpectedListener = jest.fn();
            expect(() => entity.subscribeOnFailed(entityEventName, eventFailedExpectedListener)).not.toThrow();
            expect(() => entity.emitEventFailed(eventFailedTest)).not.toThrow();
            expect(eventFailedExpectedListener).toHaveBeenCalledWith(eventFailedTest);
            eventFailedExpectedListener.mockClear();
            expect(() => entity.unsubscribe(entityEventName, eventFailedExpectedListener)).not.toThrow();
            expect(() => entity.emitEventFailed(eventFailedTest)).not.toThrow();
            expect(eventFailedExpectedListener).not.toHaveBeenCalled();
        });
        it('Should call a callback function that had been passed as a parameter to the "subscribeOnFailed" method of a domain events service bus, if it have been passed as a parameter to the "unsubscribe" method', () => {
            const eventFailedExpectedListener = jest.fn();
            const entityServiceParameterEventBusExpectedEventListener = jest.fn();
            expect(() => entity.subscribeOnFailed(entityEventName, eventFailedExpectedListener)).not.toThrow();
            expect(() => entityServiceParameterEventBus.subscribeOnFailed(entityEventName, entityServiceParameterEventBusExpectedEventListener)).not.toThrow();
            expect(() => entity.emitEventFailed(eventFailedTest)).not.toThrow();
            expect(entityServiceParameterEventBusExpectedEventListener).toHaveBeenCalledWith(eventFailedTest);
            entityServiceParameterEventBusExpectedEventListener.mockClear();
            expect(() => entity.unsubscribe(entityEventName, eventFailedExpectedListener)).not.toThrow();
            expect(() => entity.emitEventFailed(eventFailedTest)).not.toThrow();
            expect(entityServiceParameterEventBusExpectedEventListener).toHaveBeenCalled();
        });
    });
}
exports.runEntityTests = runEntityTests;
describe('BaseEntity class', () => {
    const ENTITY_EVENT_NAME = 'ENTITY_EVENT_NAME';
    const ENTITY_EVENT_FAILED_NAME = `failed::${ENTITY_EVENT_NAME}`;
    const uniqueEntityIdentitySimple = new valueObjects_mock_1.SimpleIdentityValueObjectClassWithComparisonMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB);
    const uniqueEntityIdentityMultiStub = new valueObjects_mock_1.MultipleIdentityValueObjectClassWithComparisonMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_MULTI_STUB);
    describe.each([uniqueEntityIdentitySimple, uniqueEntityIdentityMultiStub])('Entity identity %p', entityUniqueIdentifier => {
        describe.each([true, false])('Is deleted %p', isDeleted => {
            function getTestsParams() {
                const parameters = {
                    id: entityUniqueIdentifier,
                    isDeleted,
                };
                const services = {
                    domainEventBus: (0, domainEventsBus_mock_1.getMockDomainEventBus)(),
                    generateUniqueIdentifierString: identifiers_mock_1.serviceGeneratorIdentifierUnique,
                };
                class EntityTestClass extends baseEntity_1.BaseEntity {
                    constructor() {
                        super(...arguments);
                        this._type = entityType_stub_1.ENTITY_TYPE_STUB;
                    }
                    _getTransferableProps() {
                        const transferableObject = {
                            id: this.id,
                            isDeleted: this.isDeleted,
                            type: this.type,
                        };
                        return transferableObject;
                    }
                    _validate() { }
                }
                const entity = (0, implementations_1.createAndInitializeEntity)(EntityTestClass, parameters, services);
                return {
                    EntityClass: EntityTestClass,
                    entity,
                    entityEventFailedName: ENTITY_EVENT_FAILED_NAME,
                    entityEventName: ENTITY_EVENT_NAME,
                    entityType: entityType_stub_1.ENTITY_TYPE_STUB,
                    entityUniqueIdentifier,
                    isDeleted,
                    parameters,
                    services,
                };
            }
            runEntityTests(getTestsParams);
        });
    });
});
//# sourceMappingURL=baseEntity.test.js.map