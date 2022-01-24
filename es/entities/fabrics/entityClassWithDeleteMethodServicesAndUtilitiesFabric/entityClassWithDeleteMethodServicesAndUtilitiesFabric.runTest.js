"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTestEntityClassWithDeleteMethodServicesAndUtilitiesFabric = void 0;
const abstractClasses_1 = require("../../../entities/abstractClasses");
const entityClassWithDeleteMethodFabric_test_1 = require("../../../entities/fabrics/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric.test");
const entityClassWithDeleteMethodServicesAndUtilitiesFabric_1 = require("../../../entities/fabrics/entityClassWithDeleteMethodServicesAndUtilitiesFabric/entityClassWithDeleteMethodServicesAndUtilitiesFabric");
const entityType_stub_1 = require("../../../__mock__/entityType.stub");
const domainEventsBus_mock_1 = require("../../../__mock__/services/domainEventsBus.mock");
const identifiers_mock_1 = require("../../../__mock__/services/identifiers.mock");
const valueObjects_mock_1 = require("../../../__mock__/valueObjects.mock");
const implementations_1 = require("../../utilities/implementations");
function runTestEntityClassWithDeleteMethodServicesAndUtilitiesFabric(entityClassFabricWithServicesAndUtilities, testName = '') {
    describe(testName, () => {
        const ENTITY_EVENT_NAME = 'ENTITY_EVENT_NAME';
        const ENTITY_EVENT_FAILED_NAME = `failed::${ENTITY_EVENT_NAME}`;
        const uniqueEntityIdentitySimple = new valueObjects_mock_1.SimpleIdentityValueObjectClassWithComparisonMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB);
        const uniqueEntityIdentityMultiStub = new valueObjects_mock_1.MultipleIdentityValueObjectClassWithComparisonMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_MULTI_STUB);
        describe.each([uniqueEntityIdentitySimple, uniqueEntityIdentityMultiStub])('Entity identity %p', entityUniqueIdentifier => {
            describe.each([true, false])('Is deleted %p', isDeleted => {
                const parameters = {
                    id: entityUniqueIdentifier,
                    isDeleted,
                };
                const services = {
                    domainEventBus: (0, domainEventsBus_mock_1.getMockDomainEventBus)(),
                    generateUniqueIdentifierString: identifiers_mock_1.serviceGeneratorIdentifierUnique,
                };
                class BaseEntityTestClass extends abstractClasses_1.BaseEntity {
                    constructor() {
                        super(...arguments);
                        this._type = entityType_stub_1.ENTITY_TYPE_STUB;
                    }
                    _getTransferableProps() {
                        return {};
                    }
                    _validate() { }
                    compareEntitiesIdentities(...args) {
                        return this._compareEntitiesIdentities(args[0], args[1]);
                    }
                    compareEntitiesTypes(...args) {
                        return this._compareEntitiesTypes(args[0], args[1]);
                    }
                }
                const entityBaseEntity = (0, implementations_1.createAndInitializeEntity)(BaseEntityTestClass, parameters, services);
                const utilities = {
                    compareEntitiesTypes: jest.fn((...args) => {
                        return entityBaseEntity.compareEntitiesTypes(args[0], args[1]);
                    }),
                    compareEntitiesIdentities: jest.fn((...args) => {
                        return entityBaseEntity.compareEntitiesIdentities(args[0], args[1]);
                    }),
                };
                function getTestsParams() {
                    class EntityTestClass extends (0, entityClassWithDeleteMethodServicesAndUtilitiesFabric_1.entityClassWithDeleteMethodServicesAndUtilitiesFabric)({
                        type: entityType_stub_1.ENTITY_TYPE_STUB,
                        getTransferableProps(instance) {
                            return {
                                id: instance.id,
                                isDeleted: instance.isDeleted,
                                type: instance.type,
                            };
                        },
                        validateInstance() { },
                    }, services, utilities) {
                    }
                    const parameters = {
                        id: entityUniqueIdentifier,
                        isDeleted,
                    };
                    const entity = (0, implementations_1.createAndInitializeEntity)(EntityTestClass, parameters);
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
                (0, entityClassWithDeleteMethodFabric_test_1.runTestEntityWithDeleteMethod)(getTestsParams);
                afterAll(() => {
                    expect(utilities.compareEntitiesIdentities).toBeCalled();
                    expect(utilities.compareEntitiesTypes).toBeCalled();
                });
            });
        });
    });
}
exports.runTestEntityClassWithDeleteMethodServicesAndUtilitiesFabric = runTestEntityClassWithDeleteMethodServicesAndUtilitiesFabric;
//# sourceMappingURL=entityClassWithDeleteMethodServicesAndUtilitiesFabric.runTest.js.map