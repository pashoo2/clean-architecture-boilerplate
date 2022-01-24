"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAggregateTests = void 0;
const aggregateRootAbstractClass_1 = require("../../aggregates/abstractClasses/aggregateRootAbstractClass");
const entityClassWithDeleteMethodFabric_test_1 = require("../../entities/fabrics/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric.test");
const entityType_stub_1 = require("../../__mock__/entityType.stub");
const domainEventsBus_mock_1 = require("../../__mock__/services/domainEventsBus.mock");
const identifiers_mock_1 = require("../../__mock__/services/identifiers.mock");
const valueObjects_mock_1 = require("../../__mock__/valueObjects.mock");
const implementations_1 = require("../../entities/utilities/implementations");
function runAggregateTests(getParameters) {
    const getRunEntityTests = () => {
        const { aggregate: entity, AggregateClass: EntityClass, aggregateUniqueIdentifier: entityUniqueIdentifier, aggregateType: entityType, isDeleted, parameters, services, aggregateEventName: entityEventName, aggregateEventFailedName: entityEventFailedName, } = getParameters();
        return {
            entity,
            EntityClass,
            entityEventFailedName,
            entityEventName,
            entityType,
            entityUniqueIdentifier,
            isDeleted,
            parameters,
            services,
            deleteMethodName: 'delete',
        };
    };
    (0, entityClassWithDeleteMethodFabric_test_1.runTestEntityWithDeleteMethod)(getRunEntityTests);
}
exports.runAggregateTests = runAggregateTests;
describe('BaseAggregateRootAbstractClass', () => {
    const AGGREGATE_EVENT_NAME = 'AGGREGATE_EVENT_NAME';
    const AGGREGATE_EVENT_FAILED_NAME = `failed::${AGGREGATE_EVENT_NAME}`;
    const uniqueEntityIdentitySimple = new valueObjects_mock_1.SimpleIdentityValueObjectClassWithComparisonMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB);
    const uniqueEntityIdentityMultiStub = new valueObjects_mock_1.MultipleIdentityValueObjectClassWithComparisonMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_MULTI_STUB);
    describe.each([uniqueEntityIdentitySimple, uniqueEntityIdentityMultiStub])('Entity identity %p', aggregateUniqueIdentifier => {
        describe.each([true, false])('Is deleted %p', isDeleted => {
            function getTestsParams() {
                const parameters = {
                    id: aggregateUniqueIdentifier,
                    isDeleted,
                };
                const services = {
                    domainEventBus: (0, domainEventsBus_mock_1.getMockDomainEventBus)(),
                    generateUniqueIdentifierString: identifiers_mock_1.serviceGeneratorIdentifierUnique,
                };
                class AggregateRootTestClass extends aggregateRootAbstractClass_1.BaseAggregateRootAbstractClass {
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
                const aggregate = (0, implementations_1.createAndInitializeEntity)(AggregateRootTestClass, parameters, services);
                return {
                    AggregateClass: AggregateRootTestClass,
                    aggregate,
                    aggregateEventFailedName: AGGREGATE_EVENT_FAILED_NAME,
                    aggregateEventName: AGGREGATE_EVENT_NAME,
                    aggregateType: entityType_stub_1.ENTITY_TYPE_STUB,
                    aggregateUniqueIdentifier,
                    isDeleted,
                    parameters,
                    services,
                };
            }
            runAggregateTests(getTestsParams);
        });
    });
});
//# sourceMappingURL=aggregateRootAbstractClass.test.js.map