"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTestEntityWithDeleteMethod = void 0;
const domainEvents_1 = require("../../../constants/domainEvents");
const baseEntity_test_1 = require("../../../entities/abstractClasses/baseEntity/baseEntity.test");
const entityClassWithDeleteMethodFabric_1 = require("../../../entities/fabrics/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric");
const entityType_stub_1 = require("../../../__mock__/entityType.stub");
const domainEventsBus_mock_1 = require("../../../__mock__/services/domainEventsBus.mock");
const identifiers_mock_1 = require("../../../__mock__/services/identifiers.mock");
const valueObjects_mock_1 = require("../../../__mock__/valueObjects.mock");
const implementations_1 = require("../../utilities/implementations");
function runTestEntityWithDeleteMethod(getTestsParams) {
    (0, baseEntity_test_1.runEntityTests)(getTestsParams);
    describe('"$delete" method', () => {
        let entity;
        let services;
        let parameters;
        let deleteMethodName;
        beforeEach(() => {
            var _a;
            const testsParams = getTestsParams();
            entity = testsParams.entity;
            services = testsParams.services;
            parameters = testsParams.parameters;
            deleteMethodName = (_a = testsParams.deleteMethodName) !== null && _a !== void 0 ? _a : '$markDeleted';
        });
        it('Should have "delete" method', () => {
            expect(typeof entity[deleteMethodName] === 'function').toBe(true);
        });
        it('Should mark the entity as deleted', () => {
            expect(() => entity[deleteMethodName]()).not.toThrow();
            expect(entity.isDeleted).toBe(true);
        });
        it('Should emit "DELETE" event if the entity has not been deleted previously', () => {
            const listenerDeleteEvents = jest.fn();
            services.domainEventBus.subscribe(domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_DELETE, listenerDeleteEvents);
            expect(() => entity[deleteMethodName]()).not.toThrow();
            if (parameters.isDeleted) {
                expect(listenerDeleteEvents).not.toHaveBeenCalledWith(expect.objectContaining({
                    entityId: parameters.id,
                    name: domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_DELETE,
                }));
            }
            else {
                expect(listenerDeleteEvents).toHaveBeenCalledWith(expect.objectContaining({
                    entityId: parameters.id,
                    name: domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_DELETE,
                }));
            }
            listenerDeleteEvents.mockClear();
            expect(() => entity[deleteMethodName]()).not.toThrow();
            expect(listenerDeleteEvents).not.toHaveBeenCalledWith(expect.objectContaining({
                entityId: parameters.id,
                name: domainEvents_1.DOMAIN_ENTITY_EVENT_NAME_DELETE,
            }));
        });
    });
}
exports.runTestEntityWithDeleteMethod = runTestEntityWithDeleteMethod;
describe('entityClassWithDeleteMethodFabric', () => {
    const ENTITY_EVENT_NAME = 'ENTITY_EVENT_NAME';
    const ENTITY_EVENT_FAILED_NAME = `failed::${ENTITY_EVENT_NAME}`;
    const uniqueEntityIdentitySimple = new valueObjects_mock_1.SimpleIdentityValueObjectClassWithComparisonMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB);
    const uniqueEntityIdentityMultiStub = new valueObjects_mock_1.MultipleIdentityValueObjectClassWithComparisonMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_MULTI_STUB);
    describe.each([uniqueEntityIdentitySimple, uniqueEntityIdentityMultiStub])('Entity identity %p', entityUniqueIdentifier => {
        describe.each([true, false])('Is deleted %p', isDeleted => {
            function getTestsParams() {
                class EntityTestClass extends (0, entityClassWithDeleteMethodFabric_1.entityClassWithDeleteMethodFabric)({
                    type: entityType_stub_1.ENTITY_TYPE_STUB,
                    getTransferableProps(instance) {
                        return {
                            id: instance.id,
                            isDeleted: instance.isDeleted,
                            type: instance.type,
                        };
                    },
                    validateInstance() { },
                }) {
                }
                const parameters = {
                    id: entityUniqueIdentifier,
                    isDeleted,
                };
                const services = {
                    domainEventBus: (0, domainEventsBus_mock_1.getMockDomainEventBus)(),
                    generateUniqueIdentifierString: identifiers_mock_1.serviceGeneratorIdentifierUnique,
                };
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
            runTestEntityWithDeleteMethod(getTestsParams);
        });
    });
});
//# sourceMappingURL=entityClassWithDeleteMethodFabric.test.js.map