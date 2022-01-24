"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTestsForAggregateClassFabric = void 0;
const abstractClasses_1 = require("../../../aggregates/abstractClasses");
const aggregateRootAbstractClass_test_1 = require("../../../aggregates/abstractClasses/aggregateRootAbstractClass.test");
const implementations_1 = require("../../../entities/utilities/implementations");
const entityType_stub_1 = require("../../../__mock__/entityType.stub");
const domainEventsBus_mock_1 = require("../../../__mock__/services/domainEventsBus.mock");
const identifiers_mock_1 = require("../../../__mock__/services/identifiers.mock");
const valueObjects_mock_1 = require("../../../__mock__/valueObjects.mock");
const implementations_2 = require("../../../entities/utilities/implementations");
function runTestsForAggregateClassFabric(aggregateClassFabric, testName = '') {
    describe(testName, () => {
        const AGGREGATE_EVENT_NAME = 'AGGREGATE_EVENT_NAME';
        const AGGREGATE_EVENT_FAILED_NAME = `failed::${AGGREGATE_EVENT_NAME}`;
        const uniqueEntityIdentitySimple = new valueObjects_mock_1.SimpleIdentityValueObjectClassWithComparisonMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB);
        const uniqueEntityIdentityMultiStub = new valueObjects_mock_1.MultipleIdentityValueObjectClassWithComparisonMock(valueObjects_mock_1.UNIQUE_ENTITY_IDENTITY_MULTI_STUB);
        describe.each([uniqueEntityIdentitySimple, uniqueEntityIdentityMultiStub])('Entity identity %p', aggregateUniqueIdentifier => {
            describe.each([true, false])('Is deleted %p', isDeleted => {
                const parameters = {
                    id: aggregateUniqueIdentifier,
                    isDeleted,
                };
                const services = {
                    domainEventBus: (0, domainEventsBus_mock_1.getMockDomainEventBus)(),
                    generateUniqueIdentifierString: identifiers_mock_1.serviceGeneratorIdentifierUnique,
                };
                class BaseAggregateRoot extends abstractClasses_1.BaseAggregateRootAbstractClass {
                    constructor() {
                        super(...arguments);
                        this._type = entityType_stub_1.AGGREGATE_TYPE_STUB;
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
                const baseAggregateRootImplementation = (0, implementations_2.createAndInitializeEntity)(BaseAggregateRoot, parameters, services);
                const validateInstance = jest.fn(entity => {
                    if (!entity.id) {
                        throw new Error('Id should not be empty');
                    }
                    if (!entity.type) {
                        throw new Error('Type should not be empty');
                    }
                });
                const getTransferableProps = jest.fn(() => {
                    return baseAggregateRootImplementation.getTransferableProps();
                });
                const compareEntitiesTypes = jest.fn(implementations_1.compareEntitiesTypesUtility);
                const compareEntitiesIdentities = jest.fn(implementations_1.compareEntitiesIdentitiesUtility);
                function getTestsParams() {
                    class AggregateRootTestClass extends aggregateClassFabric({
                        type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                        getServices: () => services,
                        validateInstance,
                        getTransferableProps,
                        compareEntitiesTypes,
                        compareEntitiesIdentities,
                    }) {
                    }
                    const aggregate = (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters);
                    return {
                        AggregateClass: AggregateRootTestClass,
                        aggregate: aggregate,
                        aggregateEventFailedName: AGGREGATE_EVENT_FAILED_NAME,
                        aggregateEventName: AGGREGATE_EVENT_NAME,
                        aggregateType: entityType_stub_1.AGGREGATE_TYPE_STUB,
                        aggregateUniqueIdentifier,
                        isDeleted,
                        parameters,
                        services,
                    };
                }
                (0, aggregateRootAbstractClass_test_1.runAggregateTests)(getTestsParams);
                describe('Parameters passed', () => {
                    describe('validateInstance ', () => {
                        it('Should not be called in fabric', () => {
                            const validateInstanceUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance: validateInstanceUtil,
                                getTransferableProps,
                                compareEntitiesTypes,
                                compareEntitiesIdentities,
                            }) {
                            }
                            expect(validateInstanceUtil).not.toBeCalled();
                        });
                        it('Should be called in constructor', () => {
                            const validateInstanceUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance: validateInstanceUtil,
                                getTransferableProps,
                                compareEntitiesTypes,
                                compareEntitiesIdentities,
                            }) {
                            }
                            expect(validateInstanceUtil).not.toBeCalled();
                            expect(() => (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters)).not.toThrow();
                            expect(validateInstanceUtil).toBeCalled();
                        });
                        it('Should make a constructor throwing an error if it throws ', () => {
                            const validateInstanceUtil = jest.fn(() => {
                                throw new Error('Error');
                            });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance: validateInstanceUtil,
                                getTransferableProps,
                                compareEntitiesTypes,
                                compareEntitiesIdentities,
                            }) {
                            }
                            expect(() => (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters)).toThrow();
                        });
                    });
                    describe('getTransferableProps', () => {
                        it('Should not be called by the fabric', () => {
                            const getTransferablePropsUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps: getTransferablePropsUtil,
                                compareEntitiesTypes,
                                compareEntitiesIdentities,
                            }) {
                            }
                            expect(getTransferablePropsUtil).not.toBeCalled();
                        });
                        it('Should not be called in the instance constructor', () => {
                            const getTransferablePropsUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps: getTransferablePropsUtil,
                                compareEntitiesTypes,
                                compareEntitiesIdentities,
                            }) {
                            }
                            expect(() => (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters)).not.toThrow();
                            expect(getTransferablePropsUtil).not.toBeCalled();
                        });
                        it('Should be called by calling the "getTransferableProps" method', () => {
                            const getTransferablePropsUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps: getTransferablePropsUtil,
                                compareEntitiesTypes,
                                compareEntitiesIdentities,
                            }) {
                            }
                            const aggregateInstance = (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters);
                            expect(() => aggregateInstance.getTransferableProps()).not.toThrow();
                            expect(getTransferablePropsUtil).toBeCalled();
                        });
                        test('Method "getTransferableProps" should return the same value', () => {
                            const expectedValue = 'expectedValue';
                            const getTransferablePropsUtil = jest.fn(() => expectedValue);
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps: getTransferablePropsUtil,
                                compareEntitiesTypes,
                                compareEntitiesIdentities,
                            }) {
                            }
                            const aggregateInstance = (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters);
                            expect(aggregateInstance.getTransferableProps()).toBe(expectedValue);
                        });
                    });
                    describe('compareEntitiesTypes', () => {
                        it('Should not be called by the fabric', () => {
                            const compareEntitiesTypesUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps,
                                compareEntitiesTypes: compareEntitiesTypesUtil,
                                compareEntitiesIdentities: () => true,
                            }) {
                            }
                            expect(compareEntitiesTypesUtil).not.toBeCalled();
                        });
                        it('Should not be called in the instance constructor', () => {
                            const compareEntitiesTypesUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps,
                                compareEntitiesTypes: compareEntitiesTypesUtil,
                                compareEntitiesIdentities: () => true,
                            }) {
                            }
                            expect(() => (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters)).not.toThrow();
                            expect(compareEntitiesTypesUtil).not.toBeCalled();
                        });
                        it('Should be called by calling the "equalsTo" method', () => {
                            const compareEntitiesTypesUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps,
                                compareEntitiesTypes: compareEntitiesTypesUtil,
                                compareEntitiesIdentities: () => true,
                            }) {
                            }
                            const aggregateInstance = (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters);
                            expect(() => aggregateInstance.equalsTo({})).not.toThrow();
                            expect(compareEntitiesTypesUtil).toBeCalled();
                        });
                        test('Method "equalsTo" should return false if it return false', () => {
                            const expectedValue = false;
                            const compareEntitiesTypesUtil = jest.fn(() => expectedValue);
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps,
                                compareEntitiesTypes: compareEntitiesTypesUtil,
                                compareEntitiesIdentities: () => true,
                            }) {
                            }
                            const aggregateInstance = (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters);
                            expect(aggregateInstance.equalsTo({})).toBe(expectedValue);
                        });
                    });
                    describe('compareEntitiesIdentities', () => {
                        it('Should not be called by the fabric', () => {
                            const compareEntitiesIdentitiesUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps,
                                compareEntitiesTypes: () => true,
                                compareEntitiesIdentities: compareEntitiesIdentitiesUtil,
                            }) {
                            }
                            expect(compareEntitiesIdentitiesUtil).not.toBeCalled();
                        });
                        it('Should not be called in the instance constructor', () => {
                            const compareEntitiesIdentitiesUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps,
                                compareEntitiesTypes: () => true,
                                compareEntitiesIdentities: compareEntitiesIdentitiesUtil,
                            }) {
                            }
                            expect(() => (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters)).not.toThrow();
                            expect(compareEntitiesIdentitiesUtil).not.toBeCalled();
                        });
                        it('Should be called by calling the "equalsTo" method', () => {
                            const compareEntitiesIdentitiesUtil = jest.fn(() => { });
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps,
                                compareEntitiesTypes: () => true,
                                compareEntitiesIdentities: compareEntitiesIdentitiesUtil,
                            }) {
                            }
                            const aggregateInstance = (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters);
                            expect(() => aggregateInstance.equalsTo({})).not.toThrow();
                            expect(compareEntitiesIdentitiesUtil).toBeCalled();
                        });
                        test('Method "equalsTo" should return false if it return false', () => {
                            const expectedValue = false;
                            const compareEntitiesIdentitiesUtil = jest.fn(() => expectedValue);
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            class AggregateRootTestClass extends aggregateClassFabric({
                                type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                                getServices: () => services,
                                validateInstance,
                                getTransferableProps,
                                compareEntitiesTypes: () => true,
                                compareEntitiesIdentities: compareEntitiesIdentitiesUtil,
                            }) {
                            }
                            const aggregateInstance = (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters);
                            expect(aggregateInstance.equalsTo({})).toBe(expectedValue);
                        });
                    });
                    test('Method "equalsTo" should return true if both of "compareEntitiesTypes" and "compareEntitiesIdentities" return true', () => {
                        const compareEntitiesTypesUtil = jest.fn(() => true);
                        const compareEntitiesIdentitiesUtil = jest.fn(() => true);
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        class AggregateRootTestClass extends aggregateClassFabric({
                            type: entityType_stub_1.AGGREGATE_TYPE_STUB,
                            getServices: () => services,
                            validateInstance,
                            getTransferableProps,
                            compareEntitiesTypes: compareEntitiesTypesUtil,
                            compareEntitiesIdentities: compareEntitiesIdentitiesUtil,
                        }) {
                        }
                        const aggregateInstance = (0, implementations_2.createAndInitializeEntity)(AggregateRootTestClass, parameters);
                        expect(aggregateInstance.equalsTo({})).toBe(true);
                        expect(compareEntitiesTypesUtil).toBeCalled();
                        expect(compareEntitiesTypesUtil).toBeCalled();
                    });
                });
            });
        });
    });
}
exports.runTestsForAggregateClassFabric = runTestsForAggregateClassFabric;
//# sourceMappingURL=aggregateClassFabric.runTest.js.map